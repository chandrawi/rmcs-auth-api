# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc
import warnings

from rmcs_auth_api import api_pb2 as rmcs__auth__api_dot_api__pb2

GRPC_GENERATED_VERSION = '1.71.0'
GRPC_VERSION = grpc.__version__
_version_not_supported = False

try:
    from grpc._utilities import first_version_is_lower
    _version_not_supported = first_version_is_lower(GRPC_VERSION, GRPC_GENERATED_VERSION)
except ImportError:
    _version_not_supported = True

if _version_not_supported:
    raise RuntimeError(
        f'The grpc package installed is at version {GRPC_VERSION},'
        + f' but the generated code in rmcs_auth_api/api_pb2_grpc.py depends on'
        + f' grpcio>={GRPC_GENERATED_VERSION}.'
        + f' Please upgrade your grpc module to grpcio>={GRPC_GENERATED_VERSION}'
        + f' or downgrade your generated code using grpcio-tools<={GRPC_VERSION}.'
    )


class ApiServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ReadApi = channel.unary_unary(
                '/api.ApiService/ReadApi',
                request_serializer=rmcs__auth__api_dot_api__pb2.ApiId.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_api__pb2.ApiReadResponse.FromString,
                _registered_method=True)
        self.ReadApiByName = channel.unary_unary(
                '/api.ApiService/ReadApiByName',
                request_serializer=rmcs__auth__api_dot_api__pb2.ApiName.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_api__pb2.ApiReadResponse.FromString,
                _registered_method=True)
        self.ListApiByIds = channel.unary_unary(
                '/api.ApiService/ListApiByIds',
                request_serializer=rmcs__auth__api_dot_api__pb2.ApiIds.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_api__pb2.ApiListResponse.FromString,
                _registered_method=True)
        self.ListApiByName = channel.unary_unary(
                '/api.ApiService/ListApiByName',
                request_serializer=rmcs__auth__api_dot_api__pb2.ApiName.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_api__pb2.ApiListResponse.FromString,
                _registered_method=True)
        self.ListApiByCategory = channel.unary_unary(
                '/api.ApiService/ListApiByCategory',
                request_serializer=rmcs__auth__api_dot_api__pb2.ApiCategory.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_api__pb2.ApiListResponse.FromString,
                _registered_method=True)
        self.ListApiOption = channel.unary_unary(
                '/api.ApiService/ListApiOption',
                request_serializer=rmcs__auth__api_dot_api__pb2.ApiOption.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_api__pb2.ApiListResponse.FromString,
                _registered_method=True)
        self.CreateApi = channel.unary_unary(
                '/api.ApiService/CreateApi',
                request_serializer=rmcs__auth__api_dot_api__pb2.ApiSchema.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_api__pb2.ApiCreateResponse.FromString,
                _registered_method=True)
        self.UpdateApi = channel.unary_unary(
                '/api.ApiService/UpdateApi',
                request_serializer=rmcs__auth__api_dot_api__pb2.ApiUpdate.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_api__pb2.ApiChangeResponse.FromString,
                _registered_method=True)
        self.DeleteApi = channel.unary_unary(
                '/api.ApiService/DeleteApi',
                request_serializer=rmcs__auth__api_dot_api__pb2.ApiId.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_api__pb2.ApiChangeResponse.FromString,
                _registered_method=True)
        self.ReadProcedure = channel.unary_unary(
                '/api.ApiService/ReadProcedure',
                request_serializer=rmcs__auth__api_dot_api__pb2.ProcedureId.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_api__pb2.ProcedureReadResponse.FromString,
                _registered_method=True)
        self.ReadProcedureByName = channel.unary_unary(
                '/api.ApiService/ReadProcedureByName',
                request_serializer=rmcs__auth__api_dot_api__pb2.ProcedureName.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_api__pb2.ProcedureReadResponse.FromString,
                _registered_method=True)
        self.ListProcedureByIds = channel.unary_unary(
                '/api.ApiService/ListProcedureByIds',
                request_serializer=rmcs__auth__api_dot_api__pb2.ProcedureIds.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_api__pb2.ProcedureListResponse.FromString,
                _registered_method=True)
        self.ListProcedureByApi = channel.unary_unary(
                '/api.ApiService/ListProcedureByApi',
                request_serializer=rmcs__auth__api_dot_api__pb2.ApiId.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_api__pb2.ProcedureListResponse.FromString,
                _registered_method=True)
        self.ListProcedureByName = channel.unary_unary(
                '/api.ApiService/ListProcedureByName',
                request_serializer=rmcs__auth__api_dot_api__pb2.ProcedureName.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_api__pb2.ProcedureListResponse.FromString,
                _registered_method=True)
        self.ListProcedureOption = channel.unary_unary(
                '/api.ApiService/ListProcedureOption',
                request_serializer=rmcs__auth__api_dot_api__pb2.ProcedureOption.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_api__pb2.ProcedureListResponse.FromString,
                _registered_method=True)
        self.CreateProcedure = channel.unary_unary(
                '/api.ApiService/CreateProcedure',
                request_serializer=rmcs__auth__api_dot_api__pb2.ProcedureSchema.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_api__pb2.ProcedureCreateResponse.FromString,
                _registered_method=True)
        self.UpdateProcedure = channel.unary_unary(
                '/api.ApiService/UpdateProcedure',
                request_serializer=rmcs__auth__api_dot_api__pb2.ProcedureUpdate.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_api__pb2.ProcedureChangeResponse.FromString,
                _registered_method=True)
        self.DeleteProcedure = channel.unary_unary(
                '/api.ApiService/DeleteProcedure',
                request_serializer=rmcs__auth__api_dot_api__pb2.ProcedureId.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_api__pb2.ProcedureChangeResponse.FromString,
                _registered_method=True)


class ApiServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ReadApi(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ReadApiByName(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ListApiByIds(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ListApiByName(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ListApiByCategory(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ListApiOption(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateApi(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateApi(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteApi(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ReadProcedure(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ReadProcedureByName(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ListProcedureByIds(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ListProcedureByApi(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ListProcedureByName(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ListProcedureOption(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateProcedure(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateProcedure(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteProcedure(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_ApiServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ReadApi': grpc.unary_unary_rpc_method_handler(
                    servicer.ReadApi,
                    request_deserializer=rmcs__auth__api_dot_api__pb2.ApiId.FromString,
                    response_serializer=rmcs__auth__api_dot_api__pb2.ApiReadResponse.SerializeToString,
            ),
            'ReadApiByName': grpc.unary_unary_rpc_method_handler(
                    servicer.ReadApiByName,
                    request_deserializer=rmcs__auth__api_dot_api__pb2.ApiName.FromString,
                    response_serializer=rmcs__auth__api_dot_api__pb2.ApiReadResponse.SerializeToString,
            ),
            'ListApiByIds': grpc.unary_unary_rpc_method_handler(
                    servicer.ListApiByIds,
                    request_deserializer=rmcs__auth__api_dot_api__pb2.ApiIds.FromString,
                    response_serializer=rmcs__auth__api_dot_api__pb2.ApiListResponse.SerializeToString,
            ),
            'ListApiByName': grpc.unary_unary_rpc_method_handler(
                    servicer.ListApiByName,
                    request_deserializer=rmcs__auth__api_dot_api__pb2.ApiName.FromString,
                    response_serializer=rmcs__auth__api_dot_api__pb2.ApiListResponse.SerializeToString,
            ),
            'ListApiByCategory': grpc.unary_unary_rpc_method_handler(
                    servicer.ListApiByCategory,
                    request_deserializer=rmcs__auth__api_dot_api__pb2.ApiCategory.FromString,
                    response_serializer=rmcs__auth__api_dot_api__pb2.ApiListResponse.SerializeToString,
            ),
            'ListApiOption': grpc.unary_unary_rpc_method_handler(
                    servicer.ListApiOption,
                    request_deserializer=rmcs__auth__api_dot_api__pb2.ApiOption.FromString,
                    response_serializer=rmcs__auth__api_dot_api__pb2.ApiListResponse.SerializeToString,
            ),
            'CreateApi': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateApi,
                    request_deserializer=rmcs__auth__api_dot_api__pb2.ApiSchema.FromString,
                    response_serializer=rmcs__auth__api_dot_api__pb2.ApiCreateResponse.SerializeToString,
            ),
            'UpdateApi': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateApi,
                    request_deserializer=rmcs__auth__api_dot_api__pb2.ApiUpdate.FromString,
                    response_serializer=rmcs__auth__api_dot_api__pb2.ApiChangeResponse.SerializeToString,
            ),
            'DeleteApi': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteApi,
                    request_deserializer=rmcs__auth__api_dot_api__pb2.ApiId.FromString,
                    response_serializer=rmcs__auth__api_dot_api__pb2.ApiChangeResponse.SerializeToString,
            ),
            'ReadProcedure': grpc.unary_unary_rpc_method_handler(
                    servicer.ReadProcedure,
                    request_deserializer=rmcs__auth__api_dot_api__pb2.ProcedureId.FromString,
                    response_serializer=rmcs__auth__api_dot_api__pb2.ProcedureReadResponse.SerializeToString,
            ),
            'ReadProcedureByName': grpc.unary_unary_rpc_method_handler(
                    servicer.ReadProcedureByName,
                    request_deserializer=rmcs__auth__api_dot_api__pb2.ProcedureName.FromString,
                    response_serializer=rmcs__auth__api_dot_api__pb2.ProcedureReadResponse.SerializeToString,
            ),
            'ListProcedureByIds': grpc.unary_unary_rpc_method_handler(
                    servicer.ListProcedureByIds,
                    request_deserializer=rmcs__auth__api_dot_api__pb2.ProcedureIds.FromString,
                    response_serializer=rmcs__auth__api_dot_api__pb2.ProcedureListResponse.SerializeToString,
            ),
            'ListProcedureByApi': grpc.unary_unary_rpc_method_handler(
                    servicer.ListProcedureByApi,
                    request_deserializer=rmcs__auth__api_dot_api__pb2.ApiId.FromString,
                    response_serializer=rmcs__auth__api_dot_api__pb2.ProcedureListResponse.SerializeToString,
            ),
            'ListProcedureByName': grpc.unary_unary_rpc_method_handler(
                    servicer.ListProcedureByName,
                    request_deserializer=rmcs__auth__api_dot_api__pb2.ProcedureName.FromString,
                    response_serializer=rmcs__auth__api_dot_api__pb2.ProcedureListResponse.SerializeToString,
            ),
            'ListProcedureOption': grpc.unary_unary_rpc_method_handler(
                    servicer.ListProcedureOption,
                    request_deserializer=rmcs__auth__api_dot_api__pb2.ProcedureOption.FromString,
                    response_serializer=rmcs__auth__api_dot_api__pb2.ProcedureListResponse.SerializeToString,
            ),
            'CreateProcedure': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateProcedure,
                    request_deserializer=rmcs__auth__api_dot_api__pb2.ProcedureSchema.FromString,
                    response_serializer=rmcs__auth__api_dot_api__pb2.ProcedureCreateResponse.SerializeToString,
            ),
            'UpdateProcedure': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateProcedure,
                    request_deserializer=rmcs__auth__api_dot_api__pb2.ProcedureUpdate.FromString,
                    response_serializer=rmcs__auth__api_dot_api__pb2.ProcedureChangeResponse.SerializeToString,
            ),
            'DeleteProcedure': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteProcedure,
                    request_deserializer=rmcs__auth__api_dot_api__pb2.ProcedureId.FromString,
                    response_serializer=rmcs__auth__api_dot_api__pb2.ProcedureChangeResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'api.ApiService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))
    server.add_registered_method_handlers('api.ApiService', rpc_method_handlers)


 # This class is part of an EXPERIMENTAL API.
class ApiService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ReadApi(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/api.ApiService/ReadApi',
            rmcs__auth__api_dot_api__pb2.ApiId.SerializeToString,
            rmcs__auth__api_dot_api__pb2.ApiReadResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def ReadApiByName(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/api.ApiService/ReadApiByName',
            rmcs__auth__api_dot_api__pb2.ApiName.SerializeToString,
            rmcs__auth__api_dot_api__pb2.ApiReadResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def ListApiByIds(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/api.ApiService/ListApiByIds',
            rmcs__auth__api_dot_api__pb2.ApiIds.SerializeToString,
            rmcs__auth__api_dot_api__pb2.ApiListResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def ListApiByName(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/api.ApiService/ListApiByName',
            rmcs__auth__api_dot_api__pb2.ApiName.SerializeToString,
            rmcs__auth__api_dot_api__pb2.ApiListResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def ListApiByCategory(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/api.ApiService/ListApiByCategory',
            rmcs__auth__api_dot_api__pb2.ApiCategory.SerializeToString,
            rmcs__auth__api_dot_api__pb2.ApiListResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def ListApiOption(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/api.ApiService/ListApiOption',
            rmcs__auth__api_dot_api__pb2.ApiOption.SerializeToString,
            rmcs__auth__api_dot_api__pb2.ApiListResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def CreateApi(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/api.ApiService/CreateApi',
            rmcs__auth__api_dot_api__pb2.ApiSchema.SerializeToString,
            rmcs__auth__api_dot_api__pb2.ApiCreateResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def UpdateApi(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/api.ApiService/UpdateApi',
            rmcs__auth__api_dot_api__pb2.ApiUpdate.SerializeToString,
            rmcs__auth__api_dot_api__pb2.ApiChangeResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def DeleteApi(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/api.ApiService/DeleteApi',
            rmcs__auth__api_dot_api__pb2.ApiId.SerializeToString,
            rmcs__auth__api_dot_api__pb2.ApiChangeResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def ReadProcedure(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/api.ApiService/ReadProcedure',
            rmcs__auth__api_dot_api__pb2.ProcedureId.SerializeToString,
            rmcs__auth__api_dot_api__pb2.ProcedureReadResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def ReadProcedureByName(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/api.ApiService/ReadProcedureByName',
            rmcs__auth__api_dot_api__pb2.ProcedureName.SerializeToString,
            rmcs__auth__api_dot_api__pb2.ProcedureReadResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def ListProcedureByIds(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/api.ApiService/ListProcedureByIds',
            rmcs__auth__api_dot_api__pb2.ProcedureIds.SerializeToString,
            rmcs__auth__api_dot_api__pb2.ProcedureListResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def ListProcedureByApi(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/api.ApiService/ListProcedureByApi',
            rmcs__auth__api_dot_api__pb2.ApiId.SerializeToString,
            rmcs__auth__api_dot_api__pb2.ProcedureListResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def ListProcedureByName(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/api.ApiService/ListProcedureByName',
            rmcs__auth__api_dot_api__pb2.ProcedureName.SerializeToString,
            rmcs__auth__api_dot_api__pb2.ProcedureListResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def ListProcedureOption(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/api.ApiService/ListProcedureOption',
            rmcs__auth__api_dot_api__pb2.ProcedureOption.SerializeToString,
            rmcs__auth__api_dot_api__pb2.ProcedureListResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def CreateProcedure(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/api.ApiService/CreateProcedure',
            rmcs__auth__api_dot_api__pb2.ProcedureSchema.SerializeToString,
            rmcs__auth__api_dot_api__pb2.ProcedureCreateResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def UpdateProcedure(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/api.ApiService/UpdateProcedure',
            rmcs__auth__api_dot_api__pb2.ProcedureUpdate.SerializeToString,
            rmcs__auth__api_dot_api__pb2.ProcedureChangeResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)

    @staticmethod
    def DeleteProcedure(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(
            request,
            target,
            '/api.ApiService/DeleteProcedure',
            rmcs__auth__api_dot_api__pb2.ProcedureId.SerializeToString,
            rmcs__auth__api_dot_api__pb2.ProcedureChangeResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)
