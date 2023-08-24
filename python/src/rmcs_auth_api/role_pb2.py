# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: rmcs_auth_api/role.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x18rmcs_auth_api/role.proto\x12\x04role\"\xb1\x01\n\nRoleSchema\x12\n\n\x02id\x18\x01 \x01(\x0c\x12\x0e\n\x06\x61pi_id\x18\x02 \x01(\x0c\x12\x0c\n\x04name\x18\x03 \x01(\t\x12\r\n\x05multi\x18\x04 \x01(\x08\x12\x0f\n\x07ip_lock\x18\x05 \x01(\x08\x12\x17\n\x0f\x61\x63\x63\x65ss_duration\x18\x06 \x01(\x05\x12\x18\n\x10refresh_duration\x18\x07 \x01(\x05\x12\x12\n\naccess_key\x18\x08 \x01(\x0c\x12\x12\n\nprocedures\x18\t \x03(\x0c\"\x14\n\x06RoleId\x12\n\n\x02id\x18\x01 \x01(\x0c\"(\n\x08RoleName\x12\x0e\n\x06\x61pi_id\x18\x01 \x01(\x0c\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x17\n\x05\x41piId\x12\x0e\n\x06\x61pi_id\x18\x01 \x01(\x0c\"\x19\n\x06UserId\x12\x0f\n\x07user_id\x18\x01 \x01(\x0c\"\xda\x01\n\nRoleUpdate\x12\n\n\x02id\x18\x01 \x01(\x0c\x12\x11\n\x04name\x18\x02 \x01(\tH\x00\x88\x01\x01\x12\x12\n\x05multi\x18\x03 \x01(\x08H\x01\x88\x01\x01\x12\x14\n\x07ip_lock\x18\x04 \x01(\x08H\x02\x88\x01\x01\x12\x1c\n\x0f\x61\x63\x63\x65ss_duration\x18\x05 \x01(\x05H\x03\x88\x01\x01\x12\x1d\n\x10refresh_duration\x18\x06 \x01(\x05H\x04\x88\x01\x01\x42\x07\n\x05_nameB\x08\n\x06_multiB\n\n\x08_ip_lockB\x12\n\x10_access_durationB\x13\n\x11_refresh_duration\".\n\nRoleAccess\x12\n\n\x02id\x18\x01 \x01(\x0c\x12\x14\n\x0cprocedure_id\x18\x02 \x01(\x0c\"4\n\x10RoleReadResponse\x12 \n\x06result\x18\x01 \x01(\x0b\x32\x10.role.RoleSchema\"5\n\x10RoleListResponse\x12!\n\x07results\x18\x01 \x03(\x0b\x32\x10.role.RoleSchema\" \n\x12RoleCreateResponse\x12\n\n\x02id\x18\x01 \x01(\x0c\"\x14\n\x12RoleChangeResponse2\x8e\x04\n\x0bRoleService\x12\x30\n\x08ReadRole\x12\x0c.role.RoleId\x1a\x16.role.RoleReadResponse\x12\x38\n\x0eReadRoleByName\x12\x0e.role.RoleName\x1a\x16.role.RoleReadResponse\x12\x34\n\rListRoleByApi\x12\x0b.role.ApiId\x1a\x16.role.RoleListResponse\x12\x36\n\x0eListRoleByUser\x12\x0c.role.UserId\x1a\x16.role.RoleListResponse\x12\x38\n\nCreateRole\x12\x10.role.RoleSchema\x1a\x18.role.RoleCreateResponse\x12\x38\n\nUpdateRole\x12\x10.role.RoleUpdate\x1a\x18.role.RoleChangeResponse\x12\x34\n\nDeleteRole\x12\x0c.role.RoleId\x1a\x18.role.RoleChangeResponse\x12;\n\rAddRoleAccess\x12\x10.role.RoleAccess\x1a\x18.role.RoleChangeResponse\x12>\n\x10RemoveRoleAccess\x12\x10.role.RoleAccess\x1a\x18.role.RoleChangeResponseb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'rmcs_auth_api.role_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _globals['_ROLESCHEMA']._serialized_start=35
  _globals['_ROLESCHEMA']._serialized_end=212
  _globals['_ROLEID']._serialized_start=214
  _globals['_ROLEID']._serialized_end=234
  _globals['_ROLENAME']._serialized_start=236
  _globals['_ROLENAME']._serialized_end=276
  _globals['_APIID']._serialized_start=278
  _globals['_APIID']._serialized_end=301
  _globals['_USERID']._serialized_start=303
  _globals['_USERID']._serialized_end=328
  _globals['_ROLEUPDATE']._serialized_start=331
  _globals['_ROLEUPDATE']._serialized_end=549
  _globals['_ROLEACCESS']._serialized_start=551
  _globals['_ROLEACCESS']._serialized_end=597
  _globals['_ROLEREADRESPONSE']._serialized_start=599
  _globals['_ROLEREADRESPONSE']._serialized_end=651
  _globals['_ROLELISTRESPONSE']._serialized_start=653
  _globals['_ROLELISTRESPONSE']._serialized_end=706
  _globals['_ROLECREATERESPONSE']._serialized_start=708
  _globals['_ROLECREATERESPONSE']._serialized_end=740
  _globals['_ROLECHANGERESPONSE']._serialized_start=742
  _globals['_ROLECHANGERESPONSE']._serialized_end=762
  _globals['_ROLESERVICE']._serialized_start=765
  _globals['_ROLESERVICE']._serialized_end=1291
# @@protoc_insertion_point(module_scope)
