# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from rmcs_auth_api import user_pb2 as rmcs__auth__api_dot_user__pb2


class UserServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ReadUser = channel.unary_unary(
                '/user.UserService/ReadUser',
                request_serializer=rmcs__auth__api_dot_user__pb2.UserId.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_user__pb2.UserReadResponse.FromString,
                )
        self.ReadUserByName = channel.unary_unary(
                '/user.UserService/ReadUserByName',
                request_serializer=rmcs__auth__api_dot_user__pb2.UserName.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_user__pb2.UserReadResponse.FromString,
                )
        self.ListUserByRole = channel.unary_unary(
                '/user.UserService/ListUserByRole',
                request_serializer=rmcs__auth__api_dot_user__pb2.RoleId.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_user__pb2.UserListResponse.FromString,
                )
        self.CreateUser = channel.unary_unary(
                '/user.UserService/CreateUser',
                request_serializer=rmcs__auth__api_dot_user__pb2.UserSchema.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_user__pb2.UserCreateResponse.FromString,
                )
        self.UpdateUser = channel.unary_unary(
                '/user.UserService/UpdateUser',
                request_serializer=rmcs__auth__api_dot_user__pb2.UserUpdate.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_user__pb2.UserChangeResponse.FromString,
                )
        self.DeleteUser = channel.unary_unary(
                '/user.UserService/DeleteUser',
                request_serializer=rmcs__auth__api_dot_user__pb2.UserId.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_user__pb2.UserChangeResponse.FromString,
                )
        self.AddUserRole = channel.unary_unary(
                '/user.UserService/AddUserRole',
                request_serializer=rmcs__auth__api_dot_user__pb2.UserRole.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_user__pb2.UserChangeResponse.FromString,
                )
        self.RemoveUserRole = channel.unary_unary(
                '/user.UserService/RemoveUserRole',
                request_serializer=rmcs__auth__api_dot_user__pb2.UserRole.SerializeToString,
                response_deserializer=rmcs__auth__api_dot_user__pb2.UserChangeResponse.FromString,
                )


class UserServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ReadUser(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ReadUserByName(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ListUserByRole(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateUser(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateUser(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteUser(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def AddUserRole(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def RemoveUserRole(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_UserServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ReadUser': grpc.unary_unary_rpc_method_handler(
                    servicer.ReadUser,
                    request_deserializer=rmcs__auth__api_dot_user__pb2.UserId.FromString,
                    response_serializer=rmcs__auth__api_dot_user__pb2.UserReadResponse.SerializeToString,
            ),
            'ReadUserByName': grpc.unary_unary_rpc_method_handler(
                    servicer.ReadUserByName,
                    request_deserializer=rmcs__auth__api_dot_user__pb2.UserName.FromString,
                    response_serializer=rmcs__auth__api_dot_user__pb2.UserReadResponse.SerializeToString,
            ),
            'ListUserByRole': grpc.unary_unary_rpc_method_handler(
                    servicer.ListUserByRole,
                    request_deserializer=rmcs__auth__api_dot_user__pb2.RoleId.FromString,
                    response_serializer=rmcs__auth__api_dot_user__pb2.UserListResponse.SerializeToString,
            ),
            'CreateUser': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateUser,
                    request_deserializer=rmcs__auth__api_dot_user__pb2.UserSchema.FromString,
                    response_serializer=rmcs__auth__api_dot_user__pb2.UserCreateResponse.SerializeToString,
            ),
            'UpdateUser': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateUser,
                    request_deserializer=rmcs__auth__api_dot_user__pb2.UserUpdate.FromString,
                    response_serializer=rmcs__auth__api_dot_user__pb2.UserChangeResponse.SerializeToString,
            ),
            'DeleteUser': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteUser,
                    request_deserializer=rmcs__auth__api_dot_user__pb2.UserId.FromString,
                    response_serializer=rmcs__auth__api_dot_user__pb2.UserChangeResponse.SerializeToString,
            ),
            'AddUserRole': grpc.unary_unary_rpc_method_handler(
                    servicer.AddUserRole,
                    request_deserializer=rmcs__auth__api_dot_user__pb2.UserRole.FromString,
                    response_serializer=rmcs__auth__api_dot_user__pb2.UserChangeResponse.SerializeToString,
            ),
            'RemoveUserRole': grpc.unary_unary_rpc_method_handler(
                    servicer.RemoveUserRole,
                    request_deserializer=rmcs__auth__api_dot_user__pb2.UserRole.FromString,
                    response_serializer=rmcs__auth__api_dot_user__pb2.UserChangeResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'user.UserService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class UserService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ReadUser(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/user.UserService/ReadUser',
            rmcs__auth__api_dot_user__pb2.UserId.SerializeToString,
            rmcs__auth__api_dot_user__pb2.UserReadResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ReadUserByName(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/user.UserService/ReadUserByName',
            rmcs__auth__api_dot_user__pb2.UserName.SerializeToString,
            rmcs__auth__api_dot_user__pb2.UserReadResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ListUserByRole(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/user.UserService/ListUserByRole',
            rmcs__auth__api_dot_user__pb2.RoleId.SerializeToString,
            rmcs__auth__api_dot_user__pb2.UserListResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreateUser(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/user.UserService/CreateUser',
            rmcs__auth__api_dot_user__pb2.UserSchema.SerializeToString,
            rmcs__auth__api_dot_user__pb2.UserCreateResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateUser(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/user.UserService/UpdateUser',
            rmcs__auth__api_dot_user__pb2.UserUpdate.SerializeToString,
            rmcs__auth__api_dot_user__pb2.UserChangeResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeleteUser(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/user.UserService/DeleteUser',
            rmcs__auth__api_dot_user__pb2.UserId.SerializeToString,
            rmcs__auth__api_dot_user__pb2.UserChangeResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def AddUserRole(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/user.UserService/AddUserRole',
            rmcs__auth__api_dot_user__pb2.UserRole.SerializeToString,
            rmcs__auth__api_dot_user__pb2.UserChangeResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def RemoveUserRole(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/user.UserService/RemoveUserRole',
            rmcs__auth__api_dot_user__pb2.UserRole.SerializeToString,
            rmcs__auth__api_dot_user__pb2.UserChangeResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
