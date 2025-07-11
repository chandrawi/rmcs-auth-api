/**
 * @fileoverview gRPC-Web generated client stub for role
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v6.31.1
// source: rmcs_auth_api/role.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.role = require('./role_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.role.RoleServiceClient =
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
proto.role.RoleServicePromiseClient =
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
 *   !proto.role.RoleId,
 *   !proto.role.RoleReadResponse>}
 */
const methodDescriptor_RoleService_ReadRole = new grpc.web.MethodDescriptor(
  '/role.RoleService/ReadRole',
  grpc.web.MethodType.UNARY,
  proto.role.RoleId,
  proto.role.RoleReadResponse,
  /**
   * @param {!proto.role.RoleId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.role.RoleReadResponse.deserializeBinary
);


/**
 * @param {!proto.role.RoleId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.role.RoleReadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.role.RoleReadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.role.RoleServiceClient.prototype.readRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/role.RoleService/ReadRole',
      request,
      metadata || {},
      methodDescriptor_RoleService_ReadRole,
      callback);
};


/**
 * @param {!proto.role.RoleId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.role.RoleReadResponse>}
 *     Promise that resolves to the response
 */
proto.role.RoleServicePromiseClient.prototype.readRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/role.RoleService/ReadRole',
      request,
      metadata || {},
      methodDescriptor_RoleService_ReadRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.role.RoleName,
 *   !proto.role.RoleReadResponse>}
 */
const methodDescriptor_RoleService_ReadRoleByName = new grpc.web.MethodDescriptor(
  '/role.RoleService/ReadRoleByName',
  grpc.web.MethodType.UNARY,
  proto.role.RoleName,
  proto.role.RoleReadResponse,
  /**
   * @param {!proto.role.RoleName} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.role.RoleReadResponse.deserializeBinary
);


/**
 * @param {!proto.role.RoleName} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.role.RoleReadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.role.RoleReadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.role.RoleServiceClient.prototype.readRoleByName =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/role.RoleService/ReadRoleByName',
      request,
      metadata || {},
      methodDescriptor_RoleService_ReadRoleByName,
      callback);
};


/**
 * @param {!proto.role.RoleName} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.role.RoleReadResponse>}
 *     Promise that resolves to the response
 */
proto.role.RoleServicePromiseClient.prototype.readRoleByName =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/role.RoleService/ReadRoleByName',
      request,
      metadata || {},
      methodDescriptor_RoleService_ReadRoleByName);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.role.RoleIds,
 *   !proto.role.RoleListResponse>}
 */
const methodDescriptor_RoleService_ListRoleByIds = new grpc.web.MethodDescriptor(
  '/role.RoleService/ListRoleByIds',
  grpc.web.MethodType.UNARY,
  proto.role.RoleIds,
  proto.role.RoleListResponse,
  /**
   * @param {!proto.role.RoleIds} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.role.RoleListResponse.deserializeBinary
);


/**
 * @param {!proto.role.RoleIds} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.role.RoleListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.role.RoleListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.role.RoleServiceClient.prototype.listRoleByIds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/role.RoleService/ListRoleByIds',
      request,
      metadata || {},
      methodDescriptor_RoleService_ListRoleByIds,
      callback);
};


/**
 * @param {!proto.role.RoleIds} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.role.RoleListResponse>}
 *     Promise that resolves to the response
 */
proto.role.RoleServicePromiseClient.prototype.listRoleByIds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/role.RoleService/ListRoleByIds',
      request,
      metadata || {},
      methodDescriptor_RoleService_ListRoleByIds);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.role.ApiId,
 *   !proto.role.RoleListResponse>}
 */
const methodDescriptor_RoleService_ListRoleByApi = new grpc.web.MethodDescriptor(
  '/role.RoleService/ListRoleByApi',
  grpc.web.MethodType.UNARY,
  proto.role.ApiId,
  proto.role.RoleListResponse,
  /**
   * @param {!proto.role.ApiId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.role.RoleListResponse.deserializeBinary
);


/**
 * @param {!proto.role.ApiId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.role.RoleListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.role.RoleListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.role.RoleServiceClient.prototype.listRoleByApi =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/role.RoleService/ListRoleByApi',
      request,
      metadata || {},
      methodDescriptor_RoleService_ListRoleByApi,
      callback);
};


/**
 * @param {!proto.role.ApiId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.role.RoleListResponse>}
 *     Promise that resolves to the response
 */
proto.role.RoleServicePromiseClient.prototype.listRoleByApi =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/role.RoleService/ListRoleByApi',
      request,
      metadata || {},
      methodDescriptor_RoleService_ListRoleByApi);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.role.UserId,
 *   !proto.role.RoleListResponse>}
 */
const methodDescriptor_RoleService_ListRoleByUser = new grpc.web.MethodDescriptor(
  '/role.RoleService/ListRoleByUser',
  grpc.web.MethodType.UNARY,
  proto.role.UserId,
  proto.role.RoleListResponse,
  /**
   * @param {!proto.role.UserId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.role.RoleListResponse.deserializeBinary
);


/**
 * @param {!proto.role.UserId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.role.RoleListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.role.RoleListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.role.RoleServiceClient.prototype.listRoleByUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/role.RoleService/ListRoleByUser',
      request,
      metadata || {},
      methodDescriptor_RoleService_ListRoleByUser,
      callback);
};


/**
 * @param {!proto.role.UserId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.role.RoleListResponse>}
 *     Promise that resolves to the response
 */
proto.role.RoleServicePromiseClient.prototype.listRoleByUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/role.RoleService/ListRoleByUser',
      request,
      metadata || {},
      methodDescriptor_RoleService_ListRoleByUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.role.RoleName,
 *   !proto.role.RoleListResponse>}
 */
const methodDescriptor_RoleService_ListRoleByName = new grpc.web.MethodDescriptor(
  '/role.RoleService/ListRoleByName',
  grpc.web.MethodType.UNARY,
  proto.role.RoleName,
  proto.role.RoleListResponse,
  /**
   * @param {!proto.role.RoleName} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.role.RoleListResponse.deserializeBinary
);


/**
 * @param {!proto.role.RoleName} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.role.RoleListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.role.RoleListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.role.RoleServiceClient.prototype.listRoleByName =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/role.RoleService/ListRoleByName',
      request,
      metadata || {},
      methodDescriptor_RoleService_ListRoleByName,
      callback);
};


/**
 * @param {!proto.role.RoleName} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.role.RoleListResponse>}
 *     Promise that resolves to the response
 */
proto.role.RoleServicePromiseClient.prototype.listRoleByName =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/role.RoleService/ListRoleByName',
      request,
      metadata || {},
      methodDescriptor_RoleService_ListRoleByName);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.role.RoleOption,
 *   !proto.role.RoleListResponse>}
 */
const methodDescriptor_RoleService_ListRoleOption = new grpc.web.MethodDescriptor(
  '/role.RoleService/ListRoleOption',
  grpc.web.MethodType.UNARY,
  proto.role.RoleOption,
  proto.role.RoleListResponse,
  /**
   * @param {!proto.role.RoleOption} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.role.RoleListResponse.deserializeBinary
);


/**
 * @param {!proto.role.RoleOption} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.role.RoleListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.role.RoleListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.role.RoleServiceClient.prototype.listRoleOption =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/role.RoleService/ListRoleOption',
      request,
      metadata || {},
      methodDescriptor_RoleService_ListRoleOption,
      callback);
};


/**
 * @param {!proto.role.RoleOption} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.role.RoleListResponse>}
 *     Promise that resolves to the response
 */
proto.role.RoleServicePromiseClient.prototype.listRoleOption =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/role.RoleService/ListRoleOption',
      request,
      metadata || {},
      methodDescriptor_RoleService_ListRoleOption);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.role.RoleSchema,
 *   !proto.role.RoleCreateResponse>}
 */
const methodDescriptor_RoleService_CreateRole = new grpc.web.MethodDescriptor(
  '/role.RoleService/CreateRole',
  grpc.web.MethodType.UNARY,
  proto.role.RoleSchema,
  proto.role.RoleCreateResponse,
  /**
   * @param {!proto.role.RoleSchema} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.role.RoleCreateResponse.deserializeBinary
);


/**
 * @param {!proto.role.RoleSchema} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.role.RoleCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.role.RoleCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.role.RoleServiceClient.prototype.createRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/role.RoleService/CreateRole',
      request,
      metadata || {},
      methodDescriptor_RoleService_CreateRole,
      callback);
};


/**
 * @param {!proto.role.RoleSchema} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.role.RoleCreateResponse>}
 *     Promise that resolves to the response
 */
proto.role.RoleServicePromiseClient.prototype.createRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/role.RoleService/CreateRole',
      request,
      metadata || {},
      methodDescriptor_RoleService_CreateRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.role.RoleUpdate,
 *   !proto.role.RoleChangeResponse>}
 */
const methodDescriptor_RoleService_UpdateRole = new grpc.web.MethodDescriptor(
  '/role.RoleService/UpdateRole',
  grpc.web.MethodType.UNARY,
  proto.role.RoleUpdate,
  proto.role.RoleChangeResponse,
  /**
   * @param {!proto.role.RoleUpdate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.role.RoleChangeResponse.deserializeBinary
);


/**
 * @param {!proto.role.RoleUpdate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.role.RoleChangeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.role.RoleChangeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.role.RoleServiceClient.prototype.updateRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/role.RoleService/UpdateRole',
      request,
      metadata || {},
      methodDescriptor_RoleService_UpdateRole,
      callback);
};


/**
 * @param {!proto.role.RoleUpdate} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.role.RoleChangeResponse>}
 *     Promise that resolves to the response
 */
proto.role.RoleServicePromiseClient.prototype.updateRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/role.RoleService/UpdateRole',
      request,
      metadata || {},
      methodDescriptor_RoleService_UpdateRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.role.RoleId,
 *   !proto.role.RoleChangeResponse>}
 */
const methodDescriptor_RoleService_DeleteRole = new grpc.web.MethodDescriptor(
  '/role.RoleService/DeleteRole',
  grpc.web.MethodType.UNARY,
  proto.role.RoleId,
  proto.role.RoleChangeResponse,
  /**
   * @param {!proto.role.RoleId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.role.RoleChangeResponse.deserializeBinary
);


/**
 * @param {!proto.role.RoleId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.role.RoleChangeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.role.RoleChangeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.role.RoleServiceClient.prototype.deleteRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/role.RoleService/DeleteRole',
      request,
      metadata || {},
      methodDescriptor_RoleService_DeleteRole,
      callback);
};


/**
 * @param {!proto.role.RoleId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.role.RoleChangeResponse>}
 *     Promise that resolves to the response
 */
proto.role.RoleServicePromiseClient.prototype.deleteRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/role.RoleService/DeleteRole',
      request,
      metadata || {},
      methodDescriptor_RoleService_DeleteRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.role.RoleAccess,
 *   !proto.role.RoleChangeResponse>}
 */
const methodDescriptor_RoleService_AddRoleAccess = new grpc.web.MethodDescriptor(
  '/role.RoleService/AddRoleAccess',
  grpc.web.MethodType.UNARY,
  proto.role.RoleAccess,
  proto.role.RoleChangeResponse,
  /**
   * @param {!proto.role.RoleAccess} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.role.RoleChangeResponse.deserializeBinary
);


/**
 * @param {!proto.role.RoleAccess} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.role.RoleChangeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.role.RoleChangeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.role.RoleServiceClient.prototype.addRoleAccess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/role.RoleService/AddRoleAccess',
      request,
      metadata || {},
      methodDescriptor_RoleService_AddRoleAccess,
      callback);
};


/**
 * @param {!proto.role.RoleAccess} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.role.RoleChangeResponse>}
 *     Promise that resolves to the response
 */
proto.role.RoleServicePromiseClient.prototype.addRoleAccess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/role.RoleService/AddRoleAccess',
      request,
      metadata || {},
      methodDescriptor_RoleService_AddRoleAccess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.role.RoleAccess,
 *   !proto.role.RoleChangeResponse>}
 */
const methodDescriptor_RoleService_RemoveRoleAccess = new grpc.web.MethodDescriptor(
  '/role.RoleService/RemoveRoleAccess',
  grpc.web.MethodType.UNARY,
  proto.role.RoleAccess,
  proto.role.RoleChangeResponse,
  /**
   * @param {!proto.role.RoleAccess} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.role.RoleChangeResponse.deserializeBinary
);


/**
 * @param {!proto.role.RoleAccess} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.role.RoleChangeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.role.RoleChangeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.role.RoleServiceClient.prototype.removeRoleAccess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/role.RoleService/RemoveRoleAccess',
      request,
      metadata || {},
      methodDescriptor_RoleService_RemoveRoleAccess,
      callback);
};


/**
 * @param {!proto.role.RoleAccess} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.role.RoleChangeResponse>}
 *     Promise that resolves to the response
 */
proto.role.RoleServicePromiseClient.prototype.removeRoleAccess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/role.RoleService/RemoveRoleAccess',
      request,
      metadata || {},
      methodDescriptor_RoleService_RemoveRoleAccess);
};


module.exports = proto.role;

