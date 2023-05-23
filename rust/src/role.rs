#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RoleSchema {
    #[prost(uint32, tag = "1")]
    pub id: u32,
    #[prost(string, tag = "2")]
    pub name: ::prost::alloc::string::String,
    #[prost(bool, tag = "3")]
    pub secured: bool,
    #[prost(bool, tag = "4")]
    pub multi: bool,
    #[prost(uint32, tag = "5")]
    pub token_expire: u32,
    #[prost(uint32, tag = "6")]
    pub token_limit: u32,
    #[prost(uint32, repeated, tag = "7")]
    pub access: ::prost::alloc::vec::Vec<u32>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RoleId {
    #[prost(uint32, tag = "1")]
    pub id: u32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RoleName {
    #[prost(string, tag = "1")]
    pub name: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RoleListRequest {}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RoleUpdate {
    #[prost(uint32, tag = "1")]
    pub id: u32,
    #[prost(string, optional, tag = "2")]
    pub name: ::core::option::Option<::prost::alloc::string::String>,
    #[prost(bool, optional, tag = "3")]
    pub secured: ::core::option::Option<bool>,
    #[prost(bool, optional, tag = "4")]
    pub multi: ::core::option::Option<bool>,
    #[prost(uint32, optional, tag = "5")]
    pub token_expire: ::core::option::Option<u32>,
    #[prost(uint32, optional, tag = "6")]
    pub token_limit: ::core::option::Option<u32>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RoleAccess {
    #[prost(uint32, tag = "1")]
    pub id: u32,
    #[prost(uint32, tag = "2")]
    pub procedure_id: u32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RoleReadResponse {
    #[prost(message, optional, tag = "1")]
    pub result: ::core::option::Option<RoleSchema>,
    #[prost(enumeration = "ResponseStatus", tag = "2")]
    pub status: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RoleListResponse {
    #[prost(message, repeated, tag = "1")]
    pub result: ::prost::alloc::vec::Vec<RoleSchema>,
    #[prost(enumeration = "ResponseStatus", tag = "2")]
    pub status: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RoleCreateResponse {
    #[prost(uint32, tag = "1")]
    pub id: u32,
    #[prost(enumeration = "ResponseStatus", tag = "2")]
    pub status: i32,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RoleChangeResponse {
    #[prost(enumeration = "ResponseStatus", tag = "1")]
    pub status: i32,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum ResponseStatus {
    Failed = 0,
    Success = 1,
}
impl ResponseStatus {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            ResponseStatus::Failed => "FAILED",
            ResponseStatus::Success => "SUCCESS",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "FAILED" => Some(Self::Failed),
            "SUCCESS" => Some(Self::Success),
            _ => None,
        }
    }
}
/// Generated client implementations.
pub mod role_service_client {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::*;
    use tonic::codegen::http::Uri;
    #[derive(Debug, Clone)]
    pub struct RoleServiceClient<T> {
        inner: tonic::client::Grpc<T>,
    }
    impl RoleServiceClient<tonic::transport::Channel> {
        /// Attempt to create a new client by connecting to a given endpoint.
        pub async fn connect<D>(dst: D) -> Result<Self, tonic::transport::Error>
        where
            D: TryInto<tonic::transport::Endpoint>,
            D::Error: Into<StdError>,
        {
            let conn = tonic::transport::Endpoint::new(dst)?.connect().await?;
            Ok(Self::new(conn))
        }
    }
    impl<T> RoleServiceClient<T>
    where
        T: tonic::client::GrpcService<tonic::body::BoxBody>,
        T::Error: Into<StdError>,
        T::ResponseBody: Body<Data = Bytes> + Send + 'static,
        <T::ResponseBody as Body>::Error: Into<StdError> + Send,
    {
        pub fn new(inner: T) -> Self {
            let inner = tonic::client::Grpc::new(inner);
            Self { inner }
        }
        pub fn with_origin(inner: T, origin: Uri) -> Self {
            let inner = tonic::client::Grpc::with_origin(inner, origin);
            Self { inner }
        }
        pub fn with_interceptor<F>(
            inner: T,
            interceptor: F,
        ) -> RoleServiceClient<InterceptedService<T, F>>
        where
            F: tonic::service::Interceptor,
            T::ResponseBody: Default,
            T: tonic::codegen::Service<
                http::Request<tonic::body::BoxBody>,
                Response = http::Response<
                    <T as tonic::client::GrpcService<tonic::body::BoxBody>>::ResponseBody,
                >,
            >,
            <T as tonic::codegen::Service<
                http::Request<tonic::body::BoxBody>,
            >>::Error: Into<StdError> + Send + Sync,
        {
            RoleServiceClient::new(InterceptedService::new(inner, interceptor))
        }
        /// Compress requests with the given encoding.
        ///
        /// This requires the server to support it otherwise it might respond with an
        /// error.
        #[must_use]
        pub fn send_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.inner = self.inner.send_compressed(encoding);
            self
        }
        /// Enable decompressing responses.
        #[must_use]
        pub fn accept_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.inner = self.inner.accept_compressed(encoding);
            self
        }
        /// Limits the maximum size of a decoded message.
        ///
        /// Default: `4MB`
        #[must_use]
        pub fn max_decoding_message_size(mut self, limit: usize) -> Self {
            self.inner = self.inner.max_decoding_message_size(limit);
            self
        }
        /// Limits the maximum size of an encoded message.
        ///
        /// Default: `usize::MAX`
        #[must_use]
        pub fn max_encoding_message_size(mut self, limit: usize) -> Self {
            self.inner = self.inner.max_encoding_message_size(limit);
            self
        }
        pub async fn read_role(
            &mut self,
            request: impl tonic::IntoRequest<super::RoleId>,
        ) -> std::result::Result<
            tonic::Response<super::RoleReadResponse>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/role.RoleService/ReadRole",
            );
            let mut req = request.into_request();
            req.extensions_mut().insert(GrpcMethod::new("role.RoleService", "ReadRole"));
            self.inner.unary(req, path, codec).await
        }
        pub async fn read_role_by_name(
            &mut self,
            request: impl tonic::IntoRequest<super::RoleName>,
        ) -> std::result::Result<
            tonic::Response<super::RoleReadResponse>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/role.RoleService/ReadRoleByName",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("role.RoleService", "ReadRoleByName"));
            self.inner.unary(req, path, codec).await
        }
        pub async fn list_role(
            &mut self,
            request: impl tonic::IntoRequest<super::RoleListRequest>,
        ) -> std::result::Result<
            tonic::Response<super::RoleListResponse>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/role.RoleService/ListRole",
            );
            let mut req = request.into_request();
            req.extensions_mut().insert(GrpcMethod::new("role.RoleService", "ListRole"));
            self.inner.unary(req, path, codec).await
        }
        pub async fn create_role(
            &mut self,
            request: impl tonic::IntoRequest<super::RoleSchema>,
        ) -> std::result::Result<
            tonic::Response<super::RoleCreateResponse>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/role.RoleService/CreateRole",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("role.RoleService", "CreateRole"));
            self.inner.unary(req, path, codec).await
        }
        pub async fn update_role(
            &mut self,
            request: impl tonic::IntoRequest<super::RoleUpdate>,
        ) -> std::result::Result<
            tonic::Response<super::RoleChangeResponse>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/role.RoleService/UpdateRole",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("role.RoleService", "UpdateRole"));
            self.inner.unary(req, path, codec).await
        }
        pub async fn delete_role(
            &mut self,
            request: impl tonic::IntoRequest<super::RoleId>,
        ) -> std::result::Result<
            tonic::Response<super::RoleChangeResponse>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/role.RoleService/DeleteRole",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("role.RoleService", "DeleteRole"));
            self.inner.unary(req, path, codec).await
        }
        pub async fn add_role_access(
            &mut self,
            request: impl tonic::IntoRequest<super::RoleAccess>,
        ) -> std::result::Result<
            tonic::Response<super::RoleChangeResponse>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/role.RoleService/AddRoleAccess",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("role.RoleService", "AddRoleAccess"));
            self.inner.unary(req, path, codec).await
        }
        pub async fn remove_role_access(
            &mut self,
            request: impl tonic::IntoRequest<super::RoleAccess>,
        ) -> std::result::Result<
            tonic::Response<super::RoleChangeResponse>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::new(
                        tonic::Code::Unknown,
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic::codec::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/role.RoleService/RemoveRoleAccess",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("role.RoleService", "RemoveRoleAccess"));
            self.inner.unary(req, path, codec).await
        }
    }
}
/// Generated server implementations.
pub mod role_service_server {
    #![allow(unused_variables, dead_code, missing_docs, clippy::let_unit_value)]
    use tonic::codegen::*;
    /// Generated trait containing gRPC methods that should be implemented for use with RoleServiceServer.
    #[async_trait]
    pub trait RoleService: Send + Sync + 'static {
        async fn read_role(
            &self,
            request: tonic::Request<super::RoleId>,
        ) -> std::result::Result<
            tonic::Response<super::RoleReadResponse>,
            tonic::Status,
        >;
        async fn read_role_by_name(
            &self,
            request: tonic::Request<super::RoleName>,
        ) -> std::result::Result<
            tonic::Response<super::RoleReadResponse>,
            tonic::Status,
        >;
        async fn list_role(
            &self,
            request: tonic::Request<super::RoleListRequest>,
        ) -> std::result::Result<
            tonic::Response<super::RoleListResponse>,
            tonic::Status,
        >;
        async fn create_role(
            &self,
            request: tonic::Request<super::RoleSchema>,
        ) -> std::result::Result<
            tonic::Response<super::RoleCreateResponse>,
            tonic::Status,
        >;
        async fn update_role(
            &self,
            request: tonic::Request<super::RoleUpdate>,
        ) -> std::result::Result<
            tonic::Response<super::RoleChangeResponse>,
            tonic::Status,
        >;
        async fn delete_role(
            &self,
            request: tonic::Request<super::RoleId>,
        ) -> std::result::Result<
            tonic::Response<super::RoleChangeResponse>,
            tonic::Status,
        >;
        async fn add_role_access(
            &self,
            request: tonic::Request<super::RoleAccess>,
        ) -> std::result::Result<
            tonic::Response<super::RoleChangeResponse>,
            tonic::Status,
        >;
        async fn remove_role_access(
            &self,
            request: tonic::Request<super::RoleAccess>,
        ) -> std::result::Result<
            tonic::Response<super::RoleChangeResponse>,
            tonic::Status,
        >;
    }
    #[derive(Debug)]
    pub struct RoleServiceServer<T: RoleService> {
        inner: _Inner<T>,
        accept_compression_encodings: EnabledCompressionEncodings,
        send_compression_encodings: EnabledCompressionEncodings,
        max_decoding_message_size: Option<usize>,
        max_encoding_message_size: Option<usize>,
    }
    struct _Inner<T>(Arc<T>);
    impl<T: RoleService> RoleServiceServer<T> {
        pub fn new(inner: T) -> Self {
            Self::from_arc(Arc::new(inner))
        }
        pub fn from_arc(inner: Arc<T>) -> Self {
            let inner = _Inner(inner);
            Self {
                inner,
                accept_compression_encodings: Default::default(),
                send_compression_encodings: Default::default(),
                max_decoding_message_size: None,
                max_encoding_message_size: None,
            }
        }
        pub fn with_interceptor<F>(
            inner: T,
            interceptor: F,
        ) -> InterceptedService<Self, F>
        where
            F: tonic::service::Interceptor,
        {
            InterceptedService::new(Self::new(inner), interceptor)
        }
        /// Enable decompressing requests with the given encoding.
        #[must_use]
        pub fn accept_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.accept_compression_encodings.enable(encoding);
            self
        }
        /// Compress responses with the given encoding, if the client supports it.
        #[must_use]
        pub fn send_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.send_compression_encodings.enable(encoding);
            self
        }
        /// Limits the maximum size of a decoded message.
        ///
        /// Default: `4MB`
        #[must_use]
        pub fn max_decoding_message_size(mut self, limit: usize) -> Self {
            self.max_decoding_message_size = Some(limit);
            self
        }
        /// Limits the maximum size of an encoded message.
        ///
        /// Default: `usize::MAX`
        #[must_use]
        pub fn max_encoding_message_size(mut self, limit: usize) -> Self {
            self.max_encoding_message_size = Some(limit);
            self
        }
    }
    impl<T, B> tonic::codegen::Service<http::Request<B>> for RoleServiceServer<T>
    where
        T: RoleService,
        B: Body + Send + 'static,
        B::Error: Into<StdError> + Send + 'static,
    {
        type Response = http::Response<tonic::body::BoxBody>;
        type Error = std::convert::Infallible;
        type Future = BoxFuture<Self::Response, Self::Error>;
        fn poll_ready(
            &mut self,
            _cx: &mut Context<'_>,
        ) -> Poll<std::result::Result<(), Self::Error>> {
            Poll::Ready(Ok(()))
        }
        fn call(&mut self, req: http::Request<B>) -> Self::Future {
            let inner = self.inner.clone();
            match req.uri().path() {
                "/role.RoleService/ReadRole" => {
                    #[allow(non_camel_case_types)]
                    struct ReadRoleSvc<T: RoleService>(pub Arc<T>);
                    impl<T: RoleService> tonic::server::UnaryService<super::RoleId>
                    for ReadRoleSvc<T> {
                        type Response = super::RoleReadResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::RoleId>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move { (*inner).read_role(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = ReadRoleSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/role.RoleService/ReadRoleByName" => {
                    #[allow(non_camel_case_types)]
                    struct ReadRoleByNameSvc<T: RoleService>(pub Arc<T>);
                    impl<T: RoleService> tonic::server::UnaryService<super::RoleName>
                    for ReadRoleByNameSvc<T> {
                        type Response = super::RoleReadResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::RoleName>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).read_role_by_name(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = ReadRoleByNameSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/role.RoleService/ListRole" => {
                    #[allow(non_camel_case_types)]
                    struct ListRoleSvc<T: RoleService>(pub Arc<T>);
                    impl<
                        T: RoleService,
                    > tonic::server::UnaryService<super::RoleListRequest>
                    for ListRoleSvc<T> {
                        type Response = super::RoleListResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::RoleListRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move { (*inner).list_role(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = ListRoleSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/role.RoleService/CreateRole" => {
                    #[allow(non_camel_case_types)]
                    struct CreateRoleSvc<T: RoleService>(pub Arc<T>);
                    impl<T: RoleService> tonic::server::UnaryService<super::RoleSchema>
                    for CreateRoleSvc<T> {
                        type Response = super::RoleCreateResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::RoleSchema>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move { (*inner).create_role(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = CreateRoleSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/role.RoleService/UpdateRole" => {
                    #[allow(non_camel_case_types)]
                    struct UpdateRoleSvc<T: RoleService>(pub Arc<T>);
                    impl<T: RoleService> tonic::server::UnaryService<super::RoleUpdate>
                    for UpdateRoleSvc<T> {
                        type Response = super::RoleChangeResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::RoleUpdate>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move { (*inner).update_role(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = UpdateRoleSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/role.RoleService/DeleteRole" => {
                    #[allow(non_camel_case_types)]
                    struct DeleteRoleSvc<T: RoleService>(pub Arc<T>);
                    impl<T: RoleService> tonic::server::UnaryService<super::RoleId>
                    for DeleteRoleSvc<T> {
                        type Response = super::RoleChangeResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::RoleId>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move { (*inner).delete_role(request).await };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = DeleteRoleSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/role.RoleService/AddRoleAccess" => {
                    #[allow(non_camel_case_types)]
                    struct AddRoleAccessSvc<T: RoleService>(pub Arc<T>);
                    impl<T: RoleService> tonic::server::UnaryService<super::RoleAccess>
                    for AddRoleAccessSvc<T> {
                        type Response = super::RoleChangeResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::RoleAccess>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).add_role_access(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = AddRoleAccessSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/role.RoleService/RemoveRoleAccess" => {
                    #[allow(non_camel_case_types)]
                    struct RemoveRoleAccessSvc<T: RoleService>(pub Arc<T>);
                    impl<T: RoleService> tonic::server::UnaryService<super::RoleAccess>
                    for RemoveRoleAccessSvc<T> {
                        type Response = super::RoleChangeResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::RoleAccess>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                (*inner).remove_role_access(request).await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let inner = inner.0;
                        let method = RemoveRoleAccessSvc(inner);
                        let codec = tonic::codec::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                _ => {
                    Box::pin(async move {
                        Ok(
                            http::Response::builder()
                                .status(200)
                                .header("grpc-status", "12")
                                .header("content-type", "application/grpc")
                                .body(empty_body())
                                .unwrap(),
                        )
                    })
                }
            }
        }
    }
    impl<T: RoleService> Clone for RoleServiceServer<T> {
        fn clone(&self) -> Self {
            let inner = self.inner.clone();
            Self {
                inner,
                accept_compression_encodings: self.accept_compression_encodings,
                send_compression_encodings: self.send_compression_encodings,
                max_decoding_message_size: self.max_decoding_message_size,
                max_encoding_message_size: self.max_encoding_message_size,
            }
        }
    }
    impl<T: RoleService> Clone for _Inner<T> {
        fn clone(&self) -> Self {
            Self(Arc::clone(&self.0))
        }
    }
    impl<T: std::fmt::Debug> std::fmt::Debug for _Inner<T> {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            write!(f, "{:?}", self.0)
        }
    }
    impl<T: RoleService> tonic::server::NamedService for RoleServiceServer<T> {
        const NAME: &'static str = "role.RoleService";
    }
}
