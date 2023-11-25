// src/graphql/resolvers/MediaResolvers.js

import { Sequelize, DataTypes, Op, Model } from 'sequelize';
import { PubSub }from 'graphql-subscriptions';
import { uuid, slug } from '../../utils/entityBuilder.js'; 
import { modelMedia, modelUser } from  'smp-core-schema'
import { ObjectStatus, MediaType } from 'smp-core-schema'
import { sendMessagesToTopic, sendMessagesToTopicPartition, sendToTopic, sendToTopicPartition } from "../../controllers/kafka-service-producer.js";

console.log(modelMedia)

console.log(ObjectStatus.prototype) 

console.log(Object.values(MediaType))

console.log(MediaType)

const pubsub = new PubSub();
import { 
  handleError,
  navigateEntityList,
  addingLoggingContext
} from '../../utils/dataloader.js';
import { trace, SpanStatusCode } from '@opentelemetry/api';
// import { find } from 'lodash';
import pkglodash from 'lodash';
const { find } = pkglodash;
// const { SpanStatus, SpanStatusCode } from './trace/status'

const MEDIA_ADDED = 'MEDIA_ADDED';
const MEDIA_UPDATED = 'MEDIA_UPDATED';
const MEDIA_DELETED = 'MEDIA_DELETED';
// A map of functions which return data for the schema.

export default {
  Media : { 
    author: async (media, args, context, info) => {
      const span = trace.getTracer('default').startSpan('QL:Media:author');
      try {
        const User = modelUser(context.db)
        const user = await User.findByPk(media.authorID, addingLoggingContext({}, context));
        if (user) {
          span.setStatus(SpanStatusCode.OK)
          span.end();
          sendToTopic("user-nested", user)
          return user;
        } else {
          const nErr = new Error('media::Error fetching media\'s author id: ' + media.authorID + " No data found", 'authorID');
          span.recordException(nErr);
          span.end();
          throw nErr
        }
      } catch (error) {
        const nErr = new Error('media::author Error fetching author\'s media:' + error);
        span.recordException(nErr);
        span.end();
        throw nErr;
      }
    },
  },
  Query: {
    media: async (_, { mediaID }, context) => {
      context.logger.debug("Media details")
      const span = trace.getTracer('default').startSpan('QL:Query:media');
      try {
        const Media = modelMedia(context.db)
        const media = await Media.findByPk(mediaID, addingLoggingContext({}, context));
        if (media) {
          span.setAttribute("mediaID", media.mediaID);
          span.setStatus(SpanStatusCode.OK)
          span.end();
          sendToTopic("media-details", media)
          return {data: [media], errors: []};
        } else {
          const msgErr = 'media::Error fetching media id: ' + mediaID + ' No data found'
          span.setStatus({ code: SpanStatusCode.ERROR, message:msgErr})
          span.end();
          return handleError(context, msgErr, 'mediaID');
        }
      } catch (error) {
        const msgErr = 'media::Error fetching media:' + error
        span.setStatus({ code: SpanStatusCode.ERROR, message: msgErr })
        span.end();
        return handleError(context, msgErr);
      }
    },

    medias: async (_, { pagination = {}, sort = {}, filter = [] }, context)  => {
      context.logger.debug("Linsting medias")
      const span = trace.getTracer('default').startSpan('QL:Query:medias');
      async function fetchMedia(options) {
        const spanIn = trace.getTracer('default').startSpan('QL:Query:medias:fetchMedia');
        const findAll = Media.findAll(options);
        sendToTopic("media-listing", (await findAll).map((val) => {return val.mediaID}))
        spanIn.setStatus({ code: SpanStatusCode.OK })
        spanIn.end();
        return findAll;
      }
      const retNavig = await navigateEntityList(context, fetchMedia, pagination, sort, filter) ;
      span.setStatus({ code: SpanStatusCode.OK })
      span.end();
      return retNavig;
    },
  },
  Mutation: {
    createMedia: async (_, { input }, context) => {
      context.logger.info("Creating Media for " + input.authorID)
      try {
        const d = new Date();
        const horo = "" + d.getYear() + d.getMonth() + d.getDate() + d.getHours() + d.getMinutes() + d.getSeconds()
        const uRef = (uuid()).slice(0, 36)
        const mSlug = slug(input.originalName + uRef + horo).slice(0, 128)
        const originalName = input.originalName 
        const finaleName = input.finaleName ?? mSlug
        const url = ("/" + MediaType.IMAGE + "/" + d.getYear() + "/" + d.getMonth() + "/" + d.getDate() + "/" + finaleName).slice(0, 200)
        const med = {
          uniqRef: uRef, // UUID limit to 36 characters,
          slug: mSlug,
          authorID: input.authorID,
          mediaType: MediaType.IMAGE,
          legend: input.legend,
          originalName: originalName,
          finaleName: finaleName,
          url: url,
          state: ObjectStatus.ONLINE
        };
        const newMedia = await Media.create(med, addingLoggingContext({}, context));
        sendToTopic("media-creation", newMedia)
        pubsub.publish(MEDIA_ADDED, { mediaAdded: newMedia });
        return {data: [newMedia], errors: []}
      } catch (error) {
        // throw new Error('Error creating media');
        return handleError(context, 'Error creating media:' + error);
      }
    },
    updateMedia: async (_, { input }, context) => {
      context.logger.info("Updating Media " + input.mediaID)
      try {
        const media = await Media.findByPk(input.mediaID, addingLoggingContext({}, context));
        if (!media) {
          throw new Error('Media not found');
          return {data: [], errors: [{message : "error", code: 504}]}
        }
        // media
        const updatedMedia = await media.update(input, addingLoggingContext({}, context));
        sendToTopic("media-modification", updatedMedia)
        pubsub.publish(MEDIA_UPDATED, { mediaUpdated: updatedMedia });
        return {data: [updatedMedia], errors: []}
      } catch (error) {
        //throw new Error('Error updating media');
        return handleError(context, 'Error updating media:'+ error);
      }
    },
    deleteMedia: async (_, { mediaID }, context) => {
      context.logger.info("Deleting Media " + mediaID)
      try {
        const media = await Media.findByPk(mediaID, addingLoggingContext({}, context));
        if (!media) {
          context.logger.error("No media found to delete")
          throw new Error('Media not found ' + mediaID);
        }

        await media.destroy(addingLoggingContext({}, context));
        sendToTopic("media-deletion", updatedMedia)
        pubsub.publish(MEDIA_DELETED, { mediaDeleted: mediaID });
        return { success: true, errors: [], code: 0};
      } catch (error) {
        context.logger.error('Error deleting media:' + error);
        // throw new Error('Error deleting media');
        return { success: false, errors: [{message: 'Error deleting media:' + error, code: -1}], code: 507};
      }
    },
  },
  
  Subscription: {
    mediaAdded: {
      subscribe: () => pubsub.asyncIterator([MEDIA_ADDED])
    },
    mediaUpdated: {
      subscribe: () => pubsub.asyncIterator([MEDIA_UPDATED])
    },
    mediaDeleted: {
      subscribe: () => pubsub.asyncIterator([MEDIA_DELETED])
    },
  },
};
