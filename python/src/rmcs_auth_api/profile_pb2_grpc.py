# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc
import warnings

from rmcs_auth_api import profile_pb2 as rmcs__auth__api_dot_profile__pb2

GRPC_GENERATED_VERSION = '1.73.1'
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
        + f' but the generated code in rmcs_auth_api/profile_pb2_grpc.py depends on'
        + f' grpcio>={GRPC_GENERATED_VERSION}.'
        + f' Please upgrade your grpc module to grpcio>={GRPC_GENERATED_VERSION}'
        + f' or downgrade your generated code using grpcio-tools<={GRPC_VERSION}.'
    )


class ProfileServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ReadRoleProfile = channel.unary_unary(
                '/profile.ProfileService/ReadRoleProfile',
                request_serializer=rmcs__auth__api_dot_profile__pb2.ProfileId.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_profile__pb2.RoleProfileReadResponse.FromString,
                _registered_method=True)
        self.ListRoleProfile = channel.unary_unary(
                '/profile.ProfileService/ListRoleProfile',
                request_serializer=rmcs__auth__api_dot_profile__pb2.RoleId.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_profile__pb2.RoleProfileListResponse.FromString,
                _registered_method=True)
        self.CreateRoleProfile = channel.unary_unary(
                '/profile.ProfileService/CreateRoleProfile',
                request_serializer=rmcs__auth__api_dot_profile__pb2.RoleProfileSchema.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_profile__pb2.ProfileCreateResponse.FromString,
                _registered_method=True)
        self.UpdateRoleProfile = channel.unary_unary(
                '/profile.ProfileService/UpdateRoleProfile',
                request_serializer=rmcs__auth__api_dot_profile__pb2.RoleProfileUpdate.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_profile__pb2.ProfileChangeResponse.FromString,
                _registered_method=True)
        self.DeleteRoleProfile = channel.unary_unary(
                '/profile.ProfileService/DeleteRoleProfile',
                request_serializer=rmcs__auth__api_dot_profile__pb2.ProfileId.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_profile__pb2.ProfileChangeResponse.FromString,
                _registered_method=True)
        self.ReadUserProfile = channel.unary_unary(
                '/profile.ProfileService/ReadUserProfile',
                request_serializer=rmcs__auth__api_dot_profile__pb2.ProfileId.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_profile__pb2.UserProfileReadResponse.FromString,
                _registered_method=True)
        self.ListUserProfile = channel.unary_unary(
                '/profile.ProfileService/ListUserProfile',
                request_serializer=rmcs__auth__api_dot_profile__pb2.UserId.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_profile__pb2.UserProfileListResponse.FromString,
                _registered_method=True)
        self.CreateUserProfile = channel.unary_unary(
                '/profile.ProfileService/CreateUserProfile',
                request_serializer=rmcs__auth__api_dot_profile__pb2.UserProfileSchema.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_profile__pb2.ProfileCreateResponse.FromString,
                _registered_method=True)
        self.UpdateUserProfile = channel.unary_unary(
                '/profile.ProfileService/UpdateUserProfile',
                request_serializer=rmcs__auth__api_dot_profile__pb2.UserProfileUpdate.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_profile__pb2.ProfileChangeResponse.FromString,
                _registered_method=True)
        self.DeleteUserProfile = channel.unary_unary(
                '/profile.ProfileService/DeleteUserProfile',
                request_serializer=rmcs__auth__api_dot_profile__pb2.ProfileId.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_profile__pb2.ProfileChangeResponse.FromString,
                _registered_method=True)
        self.SwapUserProfile = channel.unary_unary(
                '/profile.ProfileService/SwapUserProfile',
                request_serializer=rmcs__auth__api_dot_profile__pb2.UserProfileSwap.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_profile__pb2.ProfileChangeResponse.FromString,
                _registered_method=True)


class ProfileServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ReadRoleProfile(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ListRoleProfile(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateRoleProfile(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateRoleProfile(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteRoleProfile(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ReadUserProfile(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ListUserProfile(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateUserProfile(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateUserProfile(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteUserProfile(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def SwapUserProfile(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_ProfileServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ReadRoleProfile': grpc.unary_unary_rpc_method_handler(
                    servicer.ReadRoleProfile,
                    request_deserializer=rmcs__auth__api_dot_profile__pb2.ProfileId.FromString,
                    response_serializer=rmcs__auth__api_dot_profile__pb2.RoleProfileReadResponse.SerializeToString,
            ),
            'ListRoleProfile': grpc.unary_unary_rpc_method_handler(
                    servicer.ListRoleProfile,
                    request_deserializer=rmcs__auth__api_dot_profile__pb2.RoleId.FromString,
                    response_serializer=rmcs__auth__api_dot_profile__pb2.RoleProfileListResponse.SerializeToString,
            ),
            'CreateRoleProfile': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateRoleProfile,
                    request_deserializer=rmcs__auth__api_dot_profile__pb2.RoleProfileSchema.FromString,
                    response_serializer=rmcs__auth__api_dot_profile__pb2.ProfileCreateResponse.SerializeToString,
            ),
            'UpdateRoleProfile': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateRoleProfile,
                    request_deserializer=rmcs__auth__api_dot_profile__pb2.RoleProfileUpdate.FromString,
                    response_serializer=rmcs__auth__api_dot_profile__pb2.ProfileChangeResponse.SerializeToString,
            ),
            'DeleteRoleProfile': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteRoleProfile,
                    request_deserializer=rmcs__auth__api_dot_profile__pb2.ProfileId.FromString,
                    response_serializer=rmcs__auth__api_dot_profile__pb2.ProfileChangeResponse.SerializeToString,
            ),
            'ReadUserProfile': grpc.unary_unary_rpc_method_handler(
                    servicer.ReadUserProfile,
                    request_deserializer=rmcs__auth__api_dot_profile__pb2.ProfileId.FromString,
                    response_serializer=rmcs__auth__api_dot_profile__pb2.UserProfileReadResponse.SerializeToString,
            ),
            'ListUserProfile': grpc.unary_unary_rpc_method_handler(
                    servicer.ListUserProfile,
                    request_deserializer=rmcs__auth__api_dot_profile__pb2.UserId.FromString,
                    response_serializer=rmcs__auth__api_dot_profile__pb2.UserProfileListResponse.SerializeToString,
            ),
            'CreateUserProfile': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateUserProfile,
                    request_deserializer=rmcs__auth__api_dot_profile__pb2.UserProfileSchema.FromString,
                    response_serializer=rmcs__auth__api_dot_profile__pb2.ProfileCreateResponse.SerializeToString,
            ),
            'UpdateUserProfile': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateUserProfile,
                    request_deserializer=rmcs__auth__api_dot_profile__pb2.UserProfileUpdate.FromString,
                    response_serializer=rmcs__auth__api_dot_profile__pb2.ProfileChangeResponse.SerializeToString,
            ),
            'DeleteUserProfile': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteUserProfile,
                    request_deserializer=rmcs__auth__api_dot_profile__pb2.ProfileId.FromString,
                    response_serializer=rmcs__auth__api_dot_profile__pb2.ProfileChangeResponse.SerializeToString,
            ),
            'SwapUserProfile': grpc.unary_unary_rpc_method_handler(
                    servicer.SwapUserProfile,
                    request_deserializer=rmcs__auth__api_dot_profile__pb2.UserProfileSwap.FromString,
                    response_serializer=rmcs__auth__api_dot_profile__pb2.ProfileChangeResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'profile.ProfileService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))
    server.add_registered_method_handlers('profile.ProfileService', rpc_method_handlers)


 # This class is part of an EXPERIMENTAL API.
class ProfileService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ReadRoleProfile(request,
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
            '/profile.ProfileService/ReadRoleProfile',
            rmcs__auth__api_dot_profile__pb2.ProfileId.SerializeToString,
            rmcs__auth__api_dot_profile__pb2.RoleProfileReadResponse.FromString,
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
    def ListRoleProfile(request,
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
            '/profile.ProfileService/ListRoleProfile',
            rmcs__auth__api_dot_profile__pb2.RoleId.SerializeToString,
            rmcs__auth__api_dot_profile__pb2.RoleProfileListResponse.FromString,
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
    def CreateRoleProfile(request,
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
            '/profile.ProfileService/CreateRoleProfile',
            rmcs__auth__api_dot_profile__pb2.RoleProfileSchema.SerializeToString,
            rmcs__auth__api_dot_profile__pb2.ProfileCreateResponse.FromString,
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
    def UpdateRoleProfile(request,
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
            '/profile.ProfileService/UpdateRoleProfile',
            rmcs__auth__api_dot_profile__pb2.RoleProfileUpdate.SerializeToString,
            rmcs__auth__api_dot_profile__pb2.ProfileChangeResponse.FromString,
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
    def DeleteRoleProfile(request,
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
            '/profile.ProfileService/DeleteRoleProfile',
            rmcs__auth__api_dot_profile__pb2.ProfileId.SerializeToString,
            rmcs__auth__api_dot_profile__pb2.ProfileChangeResponse.FromString,
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
    def ReadUserProfile(request,
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
            '/profile.ProfileService/ReadUserProfile',
            rmcs__auth__api_dot_profile__pb2.ProfileId.SerializeToString,
            rmcs__auth__api_dot_profile__pb2.UserProfileReadResponse.FromString,
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
    def ListUserProfile(request,
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
            '/profile.ProfileService/ListUserProfile',
            rmcs__auth__api_dot_profile__pb2.UserId.SerializeToString,
            rmcs__auth__api_dot_profile__pb2.UserProfileListResponse.FromString,
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
    def CreateUserProfile(request,
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
            '/profile.ProfileService/CreateUserProfile',
            rmcs__auth__api_dot_profile__pb2.UserProfileSchema.SerializeToString,
            rmcs__auth__api_dot_profile__pb2.ProfileCreateResponse.FromString,
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
    def UpdateUserProfile(request,
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
            '/profile.ProfileService/UpdateUserProfile',
            rmcs__auth__api_dot_profile__pb2.UserProfileUpdate.SerializeToString,
            rmcs__auth__api_dot_profile__pb2.ProfileChangeResponse.FromString,
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
    def DeleteUserProfile(request,
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
            '/profile.ProfileService/DeleteUserProfile',
            rmcs__auth__api_dot_profile__pb2.ProfileId.SerializeToString,
            rmcs__auth__api_dot_profile__pb2.ProfileChangeResponse.FromString,
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
    def SwapUserProfile(request,
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
            '/profile.ProfileService/SwapUserProfile',
            rmcs__auth__api_dot_profile__pb2.UserProfileSwap.SerializeToString,
            rmcs__auth__api_dot_profile__pb2.ProfileChangeResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
            _registered_method=True)
