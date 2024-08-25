/**
 * @fileoverview gRPC-Web generated client stub for token
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.27.3
// source: rmcs_auth_api/token.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.token = require('./token_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.token.TokenServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.token.TokenServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.token.AccessId,
 *   !proto.token.TokenReadResponse>}
 */
const methodDescriptor_TokenService_ReadAccessToken = new grpc.web.MethodDescriptor(
  '/token.TokenService/ReadAccessToken',
  grpc.web.MethodType.UNARY,
  proto.token.AccessId,
  proto.token.TokenReadResponse,
  /**
   * @param {!proto.token.AccessId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.token.TokenReadResponse.deserializeBinary
);


/**
 * @param {!proto.token.AccessId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.token.TokenReadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.token.TokenReadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.token.TokenServiceClient.prototype.readAccessToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/token.TokenService/ReadAccessToken',
      request,
      metadata || {},
      methodDescriptor_TokenService_ReadAccessToken,
      callback);
};


/**
 * @param {!proto.token.AccessId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.token.TokenReadResponse>}
 *     Promise that resolves to the response
 */
proto.token.TokenServicePromiseClient.prototype.readAccessToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/token.TokenService/ReadAccessToken',
      request,
      metadata || {},
      methodDescriptor_TokenService_ReadAccessToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.token.AuthToken,
 *   !proto.token.TokenListResponse>}
 */
const methodDescriptor_TokenService_ListAuthToken = new grpc.web.MethodDescriptor(
  '/token.TokenService/ListAuthToken',
  grpc.web.MethodType.UNARY,
  proto.token.AuthToken,
  proto.token.TokenListResponse,
  /**
   * @param {!proto.token.AuthToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.token.TokenListResponse.deserializeBinary
);


/**
 * @param {!proto.token.AuthToken} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.token.TokenListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.token.TokenListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.token.TokenServiceClient.prototype.listAuthToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/token.TokenService/ListAuthToken',
      request,
      metadata || {},
      methodDescriptor_TokenService_ListAuthToken,
      callback);
};


/**
 * @param {!proto.token.AuthToken} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.token.TokenListResponse>}
 *     Promise that resolves to the response
 */
proto.token.TokenServicePromiseClient.prototype.listAuthToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/token.TokenService/ListAuthToken',
      request,
      metadata || {},
      methodDescriptor_TokenService_ListAuthToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.token.UserId,
 *   !proto.token.TokenListResponse>}
 */
const methodDescriptor_TokenService_ListTokenByUser = new grpc.web.MethodDescriptor(
  '/token.TokenService/ListTokenByUser',
  grpc.web.MethodType.UNARY,
  proto.token.UserId,
  proto.token.TokenListResponse,
  /**
   * @param {!proto.token.UserId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.token.TokenListResponse.deserializeBinary
);


/**
 * @param {!proto.token.UserId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.token.TokenListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.token.TokenListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.token.TokenServiceClient.prototype.listTokenByUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/token.TokenService/ListTokenByUser',
      request,
      metadata || {},
      methodDescriptor_TokenService_ListTokenByUser,
      callback);
};


/**
 * @param {!proto.token.UserId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.token.TokenListResponse>}
 *     Promise that resolves to the response
 */
proto.token.TokenServicePromiseClient.prototype.listTokenByUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/token.TokenService/ListTokenByUser',
      request,
      metadata || {},
      methodDescriptor_TokenService_ListTokenByUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.token.TokenSchema,
 *   !proto.token.TokenCreateResponse>}
 */
const methodDescriptor_TokenService_CreateAccessToken = new grpc.web.MethodDescriptor(
  '/token.TokenService/CreateAccessToken',
  grpc.web.MethodType.UNARY,
  proto.token.TokenSchema,
  proto.token.TokenCreateResponse,
  /**
   * @param {!proto.token.TokenSchema} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.token.TokenCreateResponse.deserializeBinary
);


/**
 * @param {!proto.token.TokenSchema} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.token.TokenCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.token.TokenCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.token.TokenServiceClient.prototype.createAccessToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/token.TokenService/CreateAccessToken',
      request,
      metadata || {},
      methodDescriptor_TokenService_CreateAccessToken,
      callback);
};


/**
 * @param {!proto.token.TokenSchema} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.token.TokenCreateResponse>}
 *     Promise that resolves to the response
 */
proto.token.TokenServicePromiseClient.prototype.createAccessToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/token.TokenService/CreateAccessToken',
      request,
      metadata || {},
      methodDescriptor_TokenService_CreateAccessToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.token.AuthTokenCreate,
 *   !proto.token.AuthTokenCreateResponse>}
 */
const methodDescriptor_TokenService_CreateAuthToken = new grpc.web.MethodDescriptor(
  '/token.TokenService/CreateAuthToken',
  grpc.web.MethodType.UNARY,
  proto.token.AuthTokenCreate,
  proto.token.AuthTokenCreateResponse,
  /**
   * @param {!proto.token.AuthTokenCreate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.token.AuthTokenCreateResponse.deserializeBinary
);


/**
 * @param {!proto.token.AuthTokenCreate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.token.AuthTokenCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.token.AuthTokenCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.token.TokenServiceClient.prototype.createAuthToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/token.TokenService/CreateAuthToken',
      request,
      metadata || {},
      methodDescriptor_TokenService_CreateAuthToken,
      callback);
};


/**
 * @param {!proto.token.AuthTokenCreate} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.token.AuthTokenCreateResponse>}
 *     Promise that resolves to the response
 */
proto.token.TokenServicePromiseClient.prototype.createAuthToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/token.TokenService/CreateAuthToken',
      request,
      metadata || {},
      methodDescriptor_TokenService_CreateAuthToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.token.TokenUpdate,
 *   !proto.token.TokenUpdateResponse>}
 */
const methodDescriptor_TokenService_UpdateAccessToken = new grpc.web.MethodDescriptor(
  '/token.TokenService/UpdateAccessToken',
  grpc.web.MethodType.UNARY,
  proto.token.TokenUpdate,
  proto.token.TokenUpdateResponse,
  /**
   * @param {!proto.token.TokenUpdate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.token.TokenUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.token.TokenUpdate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.token.TokenUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.token.TokenUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.token.TokenServiceClient.prototype.updateAccessToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/token.TokenService/UpdateAccessToken',
      request,
      metadata || {},
      methodDescriptor_TokenService_UpdateAccessToken,
      callback);
};


/**
 * @param {!proto.token.TokenUpdate} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.token.TokenUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.token.TokenServicePromiseClient.prototype.updateAccessToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/token.TokenService/UpdateAccessToken',
      request,
      metadata || {},
      methodDescriptor_TokenService_UpdateAccessToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.token.TokenUpdate,
 *   !proto.token.TokenUpdateResponse>}
 */
const methodDescriptor_TokenService_UpdateAuthToken = new grpc.web.MethodDescriptor(
  '/token.TokenService/UpdateAuthToken',
  grpc.web.MethodType.UNARY,
  proto.token.TokenUpdate,
  proto.token.TokenUpdateResponse,
  /**
   * @param {!proto.token.TokenUpdate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.token.TokenUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.token.TokenUpdate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.token.TokenUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.token.TokenUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.token.TokenServiceClient.prototype.updateAuthToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/token.TokenService/UpdateAuthToken',
      request,
      metadata || {},
      methodDescriptor_TokenService_UpdateAuthToken,
      callback);
};


/**
 * @param {!proto.token.TokenUpdate} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.token.TokenUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.token.TokenServicePromiseClient.prototype.updateAuthToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/token.TokenService/UpdateAuthToken',
      request,
      metadata || {},
      methodDescriptor_TokenService_UpdateAuthToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.token.AccessId,
 *   !proto.token.TokenChangeResponse>}
 */
const methodDescriptor_TokenService_DeleteAccessToken = new grpc.web.MethodDescriptor(
  '/token.TokenService/DeleteAccessToken',
  grpc.web.MethodType.UNARY,
  proto.token.AccessId,
  proto.token.TokenChangeResponse,
  /**
   * @param {!proto.token.AccessId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.token.TokenChangeResponse.deserializeBinary
);


/**
 * @param {!proto.token.AccessId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.token.TokenChangeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.token.TokenChangeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.token.TokenServiceClient.prototype.deleteAccessToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/token.TokenService/DeleteAccessToken',
      request,
      metadata || {},
      methodDescriptor_TokenService_DeleteAccessToken,
      callback);
};


/**
 * @param {!proto.token.AccessId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.token.TokenChangeResponse>}
 *     Promise that resolves to the response
 */
proto.token.TokenServicePromiseClient.prototype.deleteAccessToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/token.TokenService/DeleteAccessToken',
      request,
      metadata || {},
      methodDescriptor_TokenService_DeleteAccessToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.token.AuthToken,
 *   !proto.token.TokenChangeResponse>}
 */
const methodDescriptor_TokenService_DeleteAuthToken = new grpc.web.MethodDescriptor(
  '/token.TokenService/DeleteAuthToken',
  grpc.web.MethodType.UNARY,
  proto.token.AuthToken,
  proto.token.TokenChangeResponse,
  /**
   * @param {!proto.token.AuthToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.token.TokenChangeResponse.deserializeBinary
);


/**
 * @param {!proto.token.AuthToken} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.token.TokenChangeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.token.TokenChangeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.token.TokenServiceClient.prototype.deleteAuthToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/token.TokenService/DeleteAuthToken',
      request,
      metadata || {},
      methodDescriptor_TokenService_DeleteAuthToken,
      callback);
};


/**
 * @param {!proto.token.AuthToken} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.token.TokenChangeResponse>}
 *     Promise that resolves to the response
 */
proto.token.TokenServicePromiseClient.prototype.deleteAuthToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/token.TokenService/DeleteAuthToken',
      request,
      metadata || {},
      methodDescriptor_TokenService_DeleteAuthToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.token.UserId,
 *   !proto.token.TokenChangeResponse>}
 */
const methodDescriptor_TokenService_DeleteTokenByUser = new grpc.web.MethodDescriptor(
  '/token.TokenService/DeleteTokenByUser',
  grpc.web.MethodType.UNARY,
  proto.token.UserId,
  proto.token.TokenChangeResponse,
  /**
   * @param {!proto.token.UserId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.token.TokenChangeResponse.deserializeBinary
);


/**
 * @param {!proto.token.UserId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.token.TokenChangeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.token.TokenChangeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.token.TokenServiceClient.prototype.deleteTokenByUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/token.TokenService/DeleteTokenByUser',
      request,
      metadata || {},
      methodDescriptor_TokenService_DeleteTokenByUser,
      callback);
};


/**
 * @param {!proto.token.UserId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.token.TokenChangeResponse>}
 *     Promise that resolves to the response
 */
proto.token.TokenServicePromiseClient.prototype.deleteTokenByUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/token.TokenService/DeleteTokenByUser',
      request,
      metadata || {},
      methodDescriptor_TokenService_DeleteTokenByUser);
};


module.exports = proto.token;

