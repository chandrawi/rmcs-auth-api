/**
 * @fileoverview gRPC-Web generated client stub for api
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.28.2
// source: rmcs_auth_api/api.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.api = require('./api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.api.ApiServiceClient =
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
proto.api.ApiServicePromiseClient =
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
 *   !proto.api.ApiId,
 *   !proto.api.ApiReadResponse>}
 */
const methodDescriptor_ApiService_ReadApi = new grpc.web.MethodDescriptor(
  '/api.ApiService/ReadApi',
  grpc.web.MethodType.UNARY,
  proto.api.ApiId,
  proto.api.ApiReadResponse,
  /**
   * @param {!proto.api.ApiId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ApiReadResponse.deserializeBinary
);


/**
 * @param {!proto.api.ApiId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.ApiReadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ApiReadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApiServiceClient.prototype.readApi =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApiService/ReadApi',
      request,
      metadata || {},
      methodDescriptor_ApiService_ReadApi,
      callback);
};


/**
 * @param {!proto.api.ApiId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ApiReadResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApiServicePromiseClient.prototype.readApi =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApiService/ReadApi',
      request,
      metadata || {},
      methodDescriptor_ApiService_ReadApi);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ApiName,
 *   !proto.api.ApiReadResponse>}
 */
const methodDescriptor_ApiService_ReadApiByName = new grpc.web.MethodDescriptor(
  '/api.ApiService/ReadApiByName',
  grpc.web.MethodType.UNARY,
  proto.api.ApiName,
  proto.api.ApiReadResponse,
  /**
   * @param {!proto.api.ApiName} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ApiReadResponse.deserializeBinary
);


/**
 * @param {!proto.api.ApiName} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.ApiReadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ApiReadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApiServiceClient.prototype.readApiByName =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApiService/ReadApiByName',
      request,
      metadata || {},
      methodDescriptor_ApiService_ReadApiByName,
      callback);
};


/**
 * @param {!proto.api.ApiName} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ApiReadResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApiServicePromiseClient.prototype.readApiByName =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApiService/ReadApiByName',
      request,
      metadata || {},
      methodDescriptor_ApiService_ReadApiByName);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ApiIds,
 *   !proto.api.ApiListResponse>}
 */
const methodDescriptor_ApiService_ListApiByIds = new grpc.web.MethodDescriptor(
  '/api.ApiService/ListApiByIds',
  grpc.web.MethodType.UNARY,
  proto.api.ApiIds,
  proto.api.ApiListResponse,
  /**
   * @param {!proto.api.ApiIds} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ApiListResponse.deserializeBinary
);


/**
 * @param {!proto.api.ApiIds} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.ApiListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ApiListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApiServiceClient.prototype.listApiByIds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApiService/ListApiByIds',
      request,
      metadata || {},
      methodDescriptor_ApiService_ListApiByIds,
      callback);
};


/**
 * @param {!proto.api.ApiIds} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ApiListResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApiServicePromiseClient.prototype.listApiByIds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApiService/ListApiByIds',
      request,
      metadata || {},
      methodDescriptor_ApiService_ListApiByIds);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ApiName,
 *   !proto.api.ApiListResponse>}
 */
const methodDescriptor_ApiService_ListApiByName = new grpc.web.MethodDescriptor(
  '/api.ApiService/ListApiByName',
  grpc.web.MethodType.UNARY,
  proto.api.ApiName,
  proto.api.ApiListResponse,
  /**
   * @param {!proto.api.ApiName} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ApiListResponse.deserializeBinary
);


/**
 * @param {!proto.api.ApiName} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.ApiListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ApiListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApiServiceClient.prototype.listApiByName =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApiService/ListApiByName',
      request,
      metadata || {},
      methodDescriptor_ApiService_ListApiByName,
      callback);
};


/**
 * @param {!proto.api.ApiName} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ApiListResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApiServicePromiseClient.prototype.listApiByName =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApiService/ListApiByName',
      request,
      metadata || {},
      methodDescriptor_ApiService_ListApiByName);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ApiCategory,
 *   !proto.api.ApiListResponse>}
 */
const methodDescriptor_ApiService_ListApiByCategory = new grpc.web.MethodDescriptor(
  '/api.ApiService/ListApiByCategory',
  grpc.web.MethodType.UNARY,
  proto.api.ApiCategory,
  proto.api.ApiListResponse,
  /**
   * @param {!proto.api.ApiCategory} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ApiListResponse.deserializeBinary
);


/**
 * @param {!proto.api.ApiCategory} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.ApiListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ApiListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApiServiceClient.prototype.listApiByCategory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApiService/ListApiByCategory',
      request,
      metadata || {},
      methodDescriptor_ApiService_ListApiByCategory,
      callback);
};


/**
 * @param {!proto.api.ApiCategory} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ApiListResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApiServicePromiseClient.prototype.listApiByCategory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApiService/ListApiByCategory',
      request,
      metadata || {},
      methodDescriptor_ApiService_ListApiByCategory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ApiOption,
 *   !proto.api.ApiListResponse>}
 */
const methodDescriptor_ApiService_ListApiOption = new grpc.web.MethodDescriptor(
  '/api.ApiService/ListApiOption',
  grpc.web.MethodType.UNARY,
  proto.api.ApiOption,
  proto.api.ApiListResponse,
  /**
   * @param {!proto.api.ApiOption} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ApiListResponse.deserializeBinary
);


/**
 * @param {!proto.api.ApiOption} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.ApiListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ApiListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApiServiceClient.prototype.listApiOption =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApiService/ListApiOption',
      request,
      metadata || {},
      methodDescriptor_ApiService_ListApiOption,
      callback);
};


/**
 * @param {!proto.api.ApiOption} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ApiListResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApiServicePromiseClient.prototype.listApiOption =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApiService/ListApiOption',
      request,
      metadata || {},
      methodDescriptor_ApiService_ListApiOption);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ApiSchema,
 *   !proto.api.ApiCreateResponse>}
 */
const methodDescriptor_ApiService_CreateApi = new grpc.web.MethodDescriptor(
  '/api.ApiService/CreateApi',
  grpc.web.MethodType.UNARY,
  proto.api.ApiSchema,
  proto.api.ApiCreateResponse,
  /**
   * @param {!proto.api.ApiSchema} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ApiCreateResponse.deserializeBinary
);


/**
 * @param {!proto.api.ApiSchema} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.ApiCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ApiCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApiServiceClient.prototype.createApi =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApiService/CreateApi',
      request,
      metadata || {},
      methodDescriptor_ApiService_CreateApi,
      callback);
};


/**
 * @param {!proto.api.ApiSchema} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ApiCreateResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApiServicePromiseClient.prototype.createApi =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApiService/CreateApi',
      request,
      metadata || {},
      methodDescriptor_ApiService_CreateApi);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ApiUpdate,
 *   !proto.api.ApiChangeResponse>}
 */
const methodDescriptor_ApiService_UpdateApi = new grpc.web.MethodDescriptor(
  '/api.ApiService/UpdateApi',
  grpc.web.MethodType.UNARY,
  proto.api.ApiUpdate,
  proto.api.ApiChangeResponse,
  /**
   * @param {!proto.api.ApiUpdate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ApiChangeResponse.deserializeBinary
);


/**
 * @param {!proto.api.ApiUpdate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.ApiChangeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ApiChangeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApiServiceClient.prototype.updateApi =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApiService/UpdateApi',
      request,
      metadata || {},
      methodDescriptor_ApiService_UpdateApi,
      callback);
};


/**
 * @param {!proto.api.ApiUpdate} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ApiChangeResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApiServicePromiseClient.prototype.updateApi =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApiService/UpdateApi',
      request,
      metadata || {},
      methodDescriptor_ApiService_UpdateApi);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ApiId,
 *   !proto.api.ApiChangeResponse>}
 */
const methodDescriptor_ApiService_DeleteApi = new grpc.web.MethodDescriptor(
  '/api.ApiService/DeleteApi',
  grpc.web.MethodType.UNARY,
  proto.api.ApiId,
  proto.api.ApiChangeResponse,
  /**
   * @param {!proto.api.ApiId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ApiChangeResponse.deserializeBinary
);


/**
 * @param {!proto.api.ApiId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.ApiChangeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ApiChangeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApiServiceClient.prototype.deleteApi =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApiService/DeleteApi',
      request,
      metadata || {},
      methodDescriptor_ApiService_DeleteApi,
      callback);
};


/**
 * @param {!proto.api.ApiId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ApiChangeResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApiServicePromiseClient.prototype.deleteApi =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApiService/DeleteApi',
      request,
      metadata || {},
      methodDescriptor_ApiService_DeleteApi);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ProcedureId,
 *   !proto.api.ProcedureReadResponse>}
 */
const methodDescriptor_ApiService_ReadProcedure = new grpc.web.MethodDescriptor(
  '/api.ApiService/ReadProcedure',
  grpc.web.MethodType.UNARY,
  proto.api.ProcedureId,
  proto.api.ProcedureReadResponse,
  /**
   * @param {!proto.api.ProcedureId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ProcedureReadResponse.deserializeBinary
);


/**
 * @param {!proto.api.ProcedureId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.ProcedureReadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ProcedureReadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApiServiceClient.prototype.readProcedure =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApiService/ReadProcedure',
      request,
      metadata || {},
      methodDescriptor_ApiService_ReadProcedure,
      callback);
};


/**
 * @param {!proto.api.ProcedureId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ProcedureReadResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApiServicePromiseClient.prototype.readProcedure =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApiService/ReadProcedure',
      request,
      metadata || {},
      methodDescriptor_ApiService_ReadProcedure);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ProcedureName,
 *   !proto.api.ProcedureReadResponse>}
 */
const methodDescriptor_ApiService_ReadProcedureByName = new grpc.web.MethodDescriptor(
  '/api.ApiService/ReadProcedureByName',
  grpc.web.MethodType.UNARY,
  proto.api.ProcedureName,
  proto.api.ProcedureReadResponse,
  /**
   * @param {!proto.api.ProcedureName} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ProcedureReadResponse.deserializeBinary
);


/**
 * @param {!proto.api.ProcedureName} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.ProcedureReadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ProcedureReadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApiServiceClient.prototype.readProcedureByName =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApiService/ReadProcedureByName',
      request,
      metadata || {},
      methodDescriptor_ApiService_ReadProcedureByName,
      callback);
};


/**
 * @param {!proto.api.ProcedureName} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ProcedureReadResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApiServicePromiseClient.prototype.readProcedureByName =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApiService/ReadProcedureByName',
      request,
      metadata || {},
      methodDescriptor_ApiService_ReadProcedureByName);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ProcedureIds,
 *   !proto.api.ProcedureListResponse>}
 */
const methodDescriptor_ApiService_ListProcedureByIds = new grpc.web.MethodDescriptor(
  '/api.ApiService/ListProcedureByIds',
  grpc.web.MethodType.UNARY,
  proto.api.ProcedureIds,
  proto.api.ProcedureListResponse,
  /**
   * @param {!proto.api.ProcedureIds} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ProcedureListResponse.deserializeBinary
);


/**
 * @param {!proto.api.ProcedureIds} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.ProcedureListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ProcedureListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApiServiceClient.prototype.listProcedureByIds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApiService/ListProcedureByIds',
      request,
      metadata || {},
      methodDescriptor_ApiService_ListProcedureByIds,
      callback);
};


/**
 * @param {!proto.api.ProcedureIds} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ProcedureListResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApiServicePromiseClient.prototype.listProcedureByIds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApiService/ListProcedureByIds',
      request,
      metadata || {},
      methodDescriptor_ApiService_ListProcedureByIds);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ApiId,
 *   !proto.api.ProcedureListResponse>}
 */
const methodDescriptor_ApiService_ListProcedureByApi = new grpc.web.MethodDescriptor(
  '/api.ApiService/ListProcedureByApi',
  grpc.web.MethodType.UNARY,
  proto.api.ApiId,
  proto.api.ProcedureListResponse,
  /**
   * @param {!proto.api.ApiId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ProcedureListResponse.deserializeBinary
);


/**
 * @param {!proto.api.ApiId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.ProcedureListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ProcedureListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApiServiceClient.prototype.listProcedureByApi =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApiService/ListProcedureByApi',
      request,
      metadata || {},
      methodDescriptor_ApiService_ListProcedureByApi,
      callback);
};


/**
 * @param {!proto.api.ApiId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ProcedureListResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApiServicePromiseClient.prototype.listProcedureByApi =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApiService/ListProcedureByApi',
      request,
      metadata || {},
      methodDescriptor_ApiService_ListProcedureByApi);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ProcedureName,
 *   !proto.api.ProcedureListResponse>}
 */
const methodDescriptor_ApiService_ListProcedureByName = new grpc.web.MethodDescriptor(
  '/api.ApiService/ListProcedureByName',
  grpc.web.MethodType.UNARY,
  proto.api.ProcedureName,
  proto.api.ProcedureListResponse,
  /**
   * @param {!proto.api.ProcedureName} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ProcedureListResponse.deserializeBinary
);


/**
 * @param {!proto.api.ProcedureName} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.ProcedureListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ProcedureListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApiServiceClient.prototype.listProcedureByName =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApiService/ListProcedureByName',
      request,
      metadata || {},
      methodDescriptor_ApiService_ListProcedureByName,
      callback);
};


/**
 * @param {!proto.api.ProcedureName} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ProcedureListResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApiServicePromiseClient.prototype.listProcedureByName =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApiService/ListProcedureByName',
      request,
      metadata || {},
      methodDescriptor_ApiService_ListProcedureByName);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ProcedureOption,
 *   !proto.api.ProcedureListResponse>}
 */
const methodDescriptor_ApiService_ListProcedureOption = new grpc.web.MethodDescriptor(
  '/api.ApiService/ListProcedureOption',
  grpc.web.MethodType.UNARY,
  proto.api.ProcedureOption,
  proto.api.ProcedureListResponse,
  /**
   * @param {!proto.api.ProcedureOption} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ProcedureListResponse.deserializeBinary
);


/**
 * @param {!proto.api.ProcedureOption} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.ProcedureListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ProcedureListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApiServiceClient.prototype.listProcedureOption =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApiService/ListProcedureOption',
      request,
      metadata || {},
      methodDescriptor_ApiService_ListProcedureOption,
      callback);
};


/**
 * @param {!proto.api.ProcedureOption} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ProcedureListResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApiServicePromiseClient.prototype.listProcedureOption =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApiService/ListProcedureOption',
      request,
      metadata || {},
      methodDescriptor_ApiService_ListProcedureOption);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ProcedureSchema,
 *   !proto.api.ProcedureCreateResponse>}
 */
const methodDescriptor_ApiService_CreateProcedure = new grpc.web.MethodDescriptor(
  '/api.ApiService/CreateProcedure',
  grpc.web.MethodType.UNARY,
  proto.api.ProcedureSchema,
  proto.api.ProcedureCreateResponse,
  /**
   * @param {!proto.api.ProcedureSchema} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ProcedureCreateResponse.deserializeBinary
);


/**
 * @param {!proto.api.ProcedureSchema} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.ProcedureCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ProcedureCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApiServiceClient.prototype.createProcedure =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApiService/CreateProcedure',
      request,
      metadata || {},
      methodDescriptor_ApiService_CreateProcedure,
      callback);
};


/**
 * @param {!proto.api.ProcedureSchema} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ProcedureCreateResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApiServicePromiseClient.prototype.createProcedure =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApiService/CreateProcedure',
      request,
      metadata || {},
      methodDescriptor_ApiService_CreateProcedure);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ProcedureUpdate,
 *   !proto.api.ProcedureChangeResponse>}
 */
const methodDescriptor_ApiService_UpdateProcedure = new grpc.web.MethodDescriptor(
  '/api.ApiService/UpdateProcedure',
  grpc.web.MethodType.UNARY,
  proto.api.ProcedureUpdate,
  proto.api.ProcedureChangeResponse,
  /**
   * @param {!proto.api.ProcedureUpdate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ProcedureChangeResponse.deserializeBinary
);


/**
 * @param {!proto.api.ProcedureUpdate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.ProcedureChangeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ProcedureChangeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApiServiceClient.prototype.updateProcedure =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApiService/UpdateProcedure',
      request,
      metadata || {},
      methodDescriptor_ApiService_UpdateProcedure,
      callback);
};


/**
 * @param {!proto.api.ProcedureUpdate} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ProcedureChangeResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApiServicePromiseClient.prototype.updateProcedure =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApiService/UpdateProcedure',
      request,
      metadata || {},
      methodDescriptor_ApiService_UpdateProcedure);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.ProcedureId,
 *   !proto.api.ProcedureChangeResponse>}
 */
const methodDescriptor_ApiService_DeleteProcedure = new grpc.web.MethodDescriptor(
  '/api.ApiService/DeleteProcedure',
  grpc.web.MethodType.UNARY,
  proto.api.ProcedureId,
  proto.api.ProcedureChangeResponse,
  /**
   * @param {!proto.api.ProcedureId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.ProcedureChangeResponse.deserializeBinary
);


/**
 * @param {!proto.api.ProcedureId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.ProcedureChangeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.ProcedureChangeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.ApiServiceClient.prototype.deleteProcedure =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.ApiService/DeleteProcedure',
      request,
      metadata || {},
      methodDescriptor_ApiService_DeleteProcedure,
      callback);
};


/**
 * @param {!proto.api.ProcedureId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.ProcedureChangeResponse>}
 *     Promise that resolves to the response
 */
proto.api.ApiServicePromiseClient.prototype.deleteProcedure =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.ApiService/DeleteProcedure',
      request,
      metadata || {},
      methodDescriptor_ApiService_DeleteProcedure);
};


module.exports = proto.api;

