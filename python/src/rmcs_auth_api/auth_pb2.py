# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: rmcs_auth_api/auth.proto
# Protobuf Python Version: 5.26.1
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x18rmcs_auth_api/auth.proto\x12\x04\x61uth\"\x0f\n\rApiKeyRequest\"$\n\x0e\x41piKeyResponse\x12\x12\n\npublic_key\x18\x01 \x01(\x0c\"G\n\x0f\x41piLoginRequest\x12\x0e\n\x06\x61pi_id\x18\x01 \x01(\x0c\x12\x10\n\x08password\x18\x02 \x01(\x0c\x12\x12\n\npublic_key\x18\x03 \x01(\x0c\"0\n\x0cProcedureMap\x12\x11\n\tprocedure\x18\x01 \x01(\t\x12\r\n\x05roles\x18\x02 \x03(\t\"g\n\x10\x41piLoginResponse\x12\x10\n\x08root_key\x18\x01 \x01(\x0c\x12\x12\n\naccess_key\x18\x02 \x01(\x0c\x12-\n\x11\x61\x63\x63\x65ss_procedures\x18\x03 \x03(\x0b\x32\x12.auth.ProcedureMap\"\x10\n\x0eUserKeyRequest\"%\n\x0fUserKeyResponse\x12\x12\n\npublic_key\x18\x01 \x01(\x0c\"6\n\x10UserLoginRequest\x12\x10\n\x08username\x18\x01 \x01(\t\x12\x10\n\x08password\x18\x02 \x01(\x0c\"M\n\x0e\x41\x63\x63\x65ssTokenMap\x12\x0e\n\x06\x61pi_id\x18\x01 \x01(\x0c\x12\x14\n\x0c\x61\x63\x63\x65ss_token\x18\x02 \x01(\t\x12\x15\n\rrefresh_token\x18\x03 \x01(\t\"e\n\x11UserLoginResponse\x12\x0f\n\x07user_id\x18\x01 \x01(\x0c\x12\x12\n\nauth_token\x18\x02 \x01(\t\x12+\n\raccess_tokens\x18\x03 \x03(\x0b\x32\x14.auth.AccessTokenMap\"Q\n\x12UserRefreshRequest\x12\x0e\n\x06\x61pi_id\x18\x01 \x01(\x0c\x12\x14\n\x0c\x61\x63\x63\x65ss_token\x18\x02 \x01(\t\x12\x15\n\rrefresh_token\x18\x03 \x01(\t\"B\n\x13UserRefreshResponse\x12\x14\n\x0c\x61\x63\x63\x65ss_token\x18\x01 \x01(\t\x12\x15\n\rrefresh_token\x18\x02 \x01(\t\"8\n\x11UserLogoutRequest\x12\x0f\n\x07user_id\x18\x01 \x01(\x0c\x12\x12\n\nauth_token\x18\x02 \x01(\t\"\x14\n\x12UserLogoutResponse2\x82\x03\n\x0b\x41uthService\x12\x38\n\x0b\x41piLoginKey\x12\x13.auth.ApiKeyRequest\x1a\x14.auth.ApiKeyResponse\x12\x39\n\x08\x41piLogin\x12\x15.auth.ApiLoginRequest\x1a\x16.auth.ApiLoginResponse\x12;\n\x0cUserLoginKey\x12\x14.auth.UserKeyRequest\x1a\x15.auth.UserKeyResponse\x12<\n\tUserLogin\x12\x16.auth.UserLoginRequest\x1a\x17.auth.UserLoginResponse\x12\x42\n\x0bUserRefresh\x12\x18.auth.UserRefreshRequest\x1a\x19.auth.UserRefreshResponse\x12?\n\nUserLogout\x12\x17.auth.UserLogoutRequest\x1a\x18.auth.UserLogoutResponseb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'rmcs_auth_api.auth_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  DESCRIPTOR._loaded_options = None
  _globals['_APIKEYREQUEST']._serialized_start=34
  _globals['_APIKEYREQUEST']._serialized_end=49
  _globals['_APIKEYRESPONSE']._serialized_start=51
  _globals['_APIKEYRESPONSE']._serialized_end=87
  _globals['_APILOGINREQUEST']._serialized_start=89
  _globals['_APILOGINREQUEST']._serialized_end=160
  _globals['_PROCEDUREMAP']._serialized_start=162
  _globals['_PROCEDUREMAP']._serialized_end=210
  _globals['_APILOGINRESPONSE']._serialized_start=212
  _globals['_APILOGINRESPONSE']._serialized_end=315
  _globals['_USERKEYREQUEST']._serialized_start=317
  _globals['_USERKEYREQUEST']._serialized_end=333
  _globals['_USERKEYRESPONSE']._serialized_start=335
  _globals['_USERKEYRESPONSE']._serialized_end=372
  _globals['_USERLOGINREQUEST']._serialized_start=374
  _globals['_USERLOGINREQUEST']._serialized_end=428
  _globals['_ACCESSTOKENMAP']._serialized_start=430
  _globals['_ACCESSTOKENMAP']._serialized_end=507
  _globals['_USERLOGINRESPONSE']._serialized_start=509
  _globals['_USERLOGINRESPONSE']._serialized_end=610
  _globals['_USERREFRESHREQUEST']._serialized_start=612
  _globals['_USERREFRESHREQUEST']._serialized_end=693
  _globals['_USERREFRESHRESPONSE']._serialized_start=695
  _globals['_USERREFRESHRESPONSE']._serialized_end=761
  _globals['_USERLOGOUTREQUEST']._serialized_start=763
  _globals['_USERLOGOUTREQUEST']._serialized_end=819
  _globals['_USERLOGOUTRESPONSE']._serialized_start=821
  _globals['_USERLOGOUTRESPONSE']._serialized_end=841
  _globals['_AUTHSERVICE']._serialized_start=844
  _globals['_AUTHSERVICE']._serialized_end=1230
# @@protoc_insertion_point(module_scope)
