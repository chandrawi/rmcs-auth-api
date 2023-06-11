pub mod api {
    pub const DESCRIPTOR_SET: &[u8] =
        tonic::include_file_descriptor_set!("api_descriptor");
}

pub mod role {
    pub const DESCRIPTOR_SET: &[u8] =
        tonic::include_file_descriptor_set!("role_descriptor");
}

pub mod user {
    pub const DESCRIPTOR_SET: &[u8] =
        tonic::include_file_descriptor_set!("user_descriptor");
}

pub mod token {
    pub const DESCRIPTOR_SET: &[u8] =
        tonic::include_file_descriptor_set!("token_descriptor");
}

pub mod auth {
    pub const DESCRIPTOR_SET: &[u8] =
        tonic::include_file_descriptor_set!("auth_descriptor");
}
