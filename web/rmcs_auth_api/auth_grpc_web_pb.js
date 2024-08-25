/**
 * @fileoverview gRPC-Web generated client stub for auth
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.27.3
// source: rmcs_auth_api/auth.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.auth = require('./auth_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.auth.AuthServiceClient =
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
proto.auth.AuthServicePromiseClient =
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
 *   !proto.auth.ApiKeyRequest,
 *   !proto.auth.ApiKeyResponse>}
 */
const methodDescriptor_AuthService_ApiLoginKey = new grpc.web.MethodDescriptor(
  '/auth.AuthService/ApiLoginKey',
  grpc.web.MethodType.UNARY,
  proto.auth.ApiKeyRequest,
  proto.auth.ApiKeyResponse,
  /**
   * @param {!proto.auth.ApiKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.ApiKeyResponse.deserializeBinary
);


/**
 * @param {!proto.auth.ApiKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.auth.ApiKeyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.ApiKeyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthServiceClient.prototype.apiLoginKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.AuthService/ApiLoginKey',
      request,
      metadata || {},
      methodDescriptor_AuthService_ApiLoginKey,
      callback);
};


/**
 * @param {!proto.auth.ApiKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.ApiKeyResponse>}
 *     Promise that resolves to the response
 */
proto.auth.AuthServicePromiseClient.prototype.apiLoginKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.AuthService/ApiLoginKey',
      request,
      metadata || {},
      methodDescriptor_AuthService_ApiLoginKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.ApiLoginRequest,
 *   !proto.auth.ApiLoginResponse>}
 */
const methodDescriptor_AuthService_ApiLogin = new grpc.web.MethodDescriptor(
  '/auth.AuthService/ApiLogin',
  grpc.web.MethodType.UNARY,
  proto.auth.ApiLoginRequest,
  proto.auth.ApiLoginResponse,
  /**
   * @param {!proto.auth.ApiLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.ApiLoginResponse.deserializeBinary
);


/**
 * @param {!proto.auth.ApiLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.auth.ApiLoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.ApiLoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthServiceClient.prototype.apiLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.AuthService/ApiLogin',
      request,
      metadata || {},
      methodDescriptor_AuthService_ApiLogin,
      callback);
};


/**
 * @param {!proto.auth.ApiLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.ApiLoginResponse>}
 *     Promise that resolves to the response
 */
proto.auth.AuthServicePromiseClient.prototype.apiLogin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.AuthService/ApiLogin',
      request,
      metadata || {},
      methodDescriptor_AuthService_ApiLogin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.UserKeyRequest,
 *   !proto.auth.UserKeyResponse>}
 */
const methodDescriptor_AuthService_UserLoginKey = new grpc.web.MethodDescriptor(
  '/auth.AuthService/UserLoginKey',
  grpc.web.MethodType.UNARY,
  proto.auth.UserKeyRequest,
  proto.auth.UserKeyResponse,
  /**
   * @param {!proto.auth.UserKeyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.UserKeyResponse.deserializeBinary
);


/**
 * @param {!proto.auth.UserKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.auth.UserKeyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.UserKeyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthServiceClient.prototype.userLoginKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.AuthService/UserLoginKey',
      request,
      metadata || {},
      methodDescriptor_AuthService_UserLoginKey,
      callback);
};


/**
 * @param {!proto.auth.UserKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.UserKeyResponse>}
 *     Promise that resolves to the response
 */
proto.auth.AuthServicePromiseClient.prototype.userLoginKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.AuthService/UserLoginKey',
      request,
      metadata || {},
      methodDescriptor_AuthService_UserLoginKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.UserLoginRequest,
 *   !proto.auth.UserLoginResponse>}
 */
const methodDescriptor_AuthService_UserLogin = new grpc.web.MethodDescriptor(
  '/auth.AuthService/UserLogin',
  grpc.web.MethodType.UNARY,
  proto.auth.UserLoginRequest,
  proto.auth.UserLoginResponse,
  /**
   * @param {!proto.auth.UserLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.UserLoginResponse.deserializeBinary
);


/**
 * @param {!proto.auth.UserLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.auth.UserLoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.UserLoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthServiceClient.prototype.userLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.AuthService/UserLogin',
      request,
      metadata || {},
      methodDescriptor_AuthService_UserLogin,
      callback);
};


/**
 * @param {!proto.auth.UserLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.UserLoginResponse>}
 *     Promise that resolves to the response
 */
proto.auth.AuthServicePromiseClient.prototype.userLogin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.AuthService/UserLogin',
      request,
      metadata || {},
      methodDescriptor_AuthService_UserLogin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.UserRefreshRequest,
 *   !proto.auth.UserRefreshResponse>}
 */
const methodDescriptor_AuthService_UserRefresh = new grpc.web.MethodDescriptor(
  '/auth.AuthService/UserRefresh',
  grpc.web.MethodType.UNARY,
  proto.auth.UserRefreshRequest,
  proto.auth.UserRefreshResponse,
  /**
   * @param {!proto.auth.UserRefreshRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.UserRefreshResponse.deserializeBinary
);


/**
 * @param {!proto.auth.UserRefreshRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.auth.UserRefreshResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.UserRefreshResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthServiceClient.prototype.userRefresh =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.AuthService/UserRefresh',
      request,
      metadata || {},
      methodDescriptor_AuthService_UserRefresh,
      callback);
};


/**
 * @param {!proto.auth.UserRefreshRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.UserRefreshResponse>}
 *     Promise that resolves to the response
 */
proto.auth.AuthServicePromiseClient.prototype.userRefresh =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.AuthService/UserRefresh',
      request,
      metadata || {},
      methodDescriptor_AuthService_UserRefresh);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.auth.UserLogoutRequest,
 *   !proto.auth.UserLogoutResponse>}
 */
const methodDescriptor_AuthService_UserLogout = new grpc.web.MethodDescriptor(
  '/auth.AuthService/UserLogout',
  grpc.web.MethodType.UNARY,
  proto.auth.UserLogoutRequest,
  proto.auth.UserLogoutResponse,
  /**
   * @param {!proto.auth.UserLogoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.auth.UserLogoutResponse.deserializeBinary
);


/**
 * @param {!proto.auth.UserLogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.auth.UserLogoutResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.auth.UserLogoutResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.auth.AuthServiceClient.prototype.userLogout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/auth.AuthService/UserLogout',
      request,
      metadata || {},
      methodDescriptor_AuthService_UserLogout,
      callback);
};


/**
 * @param {!proto.auth.UserLogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.auth.UserLogoutResponse>}
 *     Promise that resolves to the response
 */
proto.auth.AuthServicePromiseClient.prototype.userLogout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/auth.AuthService/UserLogout',
      request,
      metadata || {},
      methodDescriptor_AuthService_UserLogout);
};


module.exports = proto.auth;

