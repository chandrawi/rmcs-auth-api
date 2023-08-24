use std::env;
use std::path::PathBuf;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let proto_files = [
        ("../proto/rmcs_auth_api/api.proto", "api_descriptor.bin"),
        ("../proto/rmcs_auth_api/role.proto", "role_descriptor.bin"),
        ("../proto/rmcs_auth_api/user.proto", "user_descriptor.bin"),
        ("../proto/rmcs_auth_api/token.proto", "token_descriptor.bin"),
        ("../proto/rmcs_auth_api/auth.proto", "auth_descriptor.bin")
    ];
    let out_dir = PathBuf::from(env::var("OUT_DIR").unwrap());

    for tuple in proto_files {
        let (fproto, fdescriptor) = tuple;
        tonic_build::configure()
            .protoc_arg("--experimental_allow_proto3_optional") // for older systems
            .build_client(true)
            .build_server(true)
            .file_descriptor_set_path(out_dir.join(fdescriptor))
            .out_dir("./src")
            .compile(&[fproto], &["../proto/rmcs_auth_api"])?;
    }

    Ok(())
}
