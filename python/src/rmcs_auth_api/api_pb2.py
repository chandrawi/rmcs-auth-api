# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: rmcs_auth_api/api.proto
# Protobuf Python Version: 5.26.1
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x17rmcs_auth_api/api.proto\x12\x03\x61pi\"\xad\x01\n\tApiSchema\x12\n\n\x02id\x18\x01 \x01(\x0c\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0f\n\x07\x61\x64\x64ress\x18\x03 \x01(\t\x12\x10\n\x08\x63\x61tegory\x18\x04 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x05 \x01(\t\x12\x10\n\x08password\x18\x06 \x01(\t\x12\x12\n\naccess_key\x18\x07 \x01(\x0c\x12(\n\nprocedures\x18\x08 \x03(\x0b\x32\x14.api.ProcedureSchema\"\x13\n\x05\x41piId\x12\n\n\x02id\x18\x01 \x01(\x0c\"\x15\n\x06\x41piIds\x12\x0b\n\x03ids\x18\x01 \x03(\x0c\"\x17\n\x07\x41piName\x12\x0c\n\x04name\x18\x01 \x01(\t\"\x1f\n\x0b\x41piCategory\x12\x10\n\x08\x63\x61tegory\x18\x01 \x01(\t\"K\n\tApiOption\x12\x11\n\x04name\x18\x01 \x01(\tH\x00\x88\x01\x01\x12\x15\n\x08\x63\x61tegory\x18\x02 \x01(\tH\x01\x88\x01\x01\x42\x07\n\x05_nameB\x0b\n\t_category\"\xef\x01\n\tApiUpdate\x12\n\n\x02id\x18\x01 \x01(\x0c\x12\x11\n\x04name\x18\x02 \x01(\tH\x00\x88\x01\x01\x12\x14\n\x07\x61\x64\x64ress\x18\x03 \x01(\tH\x01\x88\x01\x01\x12\x15\n\x08\x63\x61tegory\x18\x04 \x01(\tH\x02\x88\x01\x01\x12\x18\n\x0b\x64\x65scription\x18\x05 \x01(\tH\x03\x88\x01\x01\x12\x15\n\x08password\x18\x06 \x01(\tH\x04\x88\x01\x01\x12\x17\n\naccess_key\x18\x07 \x01(\x0cH\x05\x88\x01\x01\x42\x07\n\x05_nameB\n\n\x08_addressB\x0b\n\t_categoryB\x0e\n\x0c_descriptionB\x0b\n\t_passwordB\r\n\x0b_access_key\"_\n\x0fProcedureSchema\x12\n\n\x02id\x18\x01 \x01(\x0c\x12\x0e\n\x06\x61pi_id\x18\x02 \x01(\x0c\x12\x0c\n\x04name\x18\x03 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x04 \x01(\t\x12\r\n\x05roles\x18\x05 \x03(\t\"\x19\n\x0bProcedureId\x12\n\n\x02id\x18\x01 \x01(\x0c\"\x1b\n\x0cProcedureIds\x12\x0b\n\x03ids\x18\x01 \x03(\x0c\"-\n\rProcedureName\x12\x0e\n\x06\x61pi_id\x18\x01 \x01(\x0c\x12\x0c\n\x04name\x18\x03 \x01(\t\"M\n\x0fProcedureOption\x12\x13\n\x06\x61pi_id\x18\x01 \x01(\x0cH\x00\x88\x01\x01\x12\x11\n\x04name\x18\x02 \x01(\tH\x01\x88\x01\x01\x42\t\n\x07_api_idB\x07\n\x05_name\"c\n\x0fProcedureUpdate\x12\n\n\x02id\x18\x01 \x01(\x0c\x12\x11\n\x04name\x18\x02 \x01(\tH\x00\x88\x01\x01\x12\x18\n\x0b\x64\x65scription\x18\x03 \x01(\tH\x01\x88\x01\x01\x42\x07\n\x05_nameB\x0e\n\x0c_description\"1\n\x0f\x41piReadResponse\x12\x1e\n\x06result\x18\x01 \x01(\x0b\x32\x0e.api.ApiSchema\"2\n\x0f\x41piListResponse\x12\x1f\n\x07results\x18\x01 \x03(\x0b\x32\x0e.api.ApiSchema\"\x1f\n\x11\x41piCreateResponse\x12\n\n\x02id\x18\x01 \x01(\x0c\"\x13\n\x11\x41piChangeResponse\"=\n\x15ProcedureReadResponse\x12$\n\x06result\x18\x01 \x01(\x0b\x32\x14.api.ProcedureSchema\">\n\x15ProcedureListResponse\x12%\n\x07results\x18\x01 \x03(\x0b\x32\x14.api.ProcedureSchema\"%\n\x17ProcedureCreateResponse\x12\n\n\x02id\x18\x01 \x01(\x0c\"\x19\n\x17ProcedureChangeResponse2\xcf\x08\n\nApiService\x12+\n\x07ReadApi\x12\n.api.ApiId\x1a\x14.api.ApiReadResponse\x12\x33\n\rReadApiByName\x12\x0c.api.ApiName\x1a\x14.api.ApiReadResponse\x12\x31\n\x0cListApiByIds\x12\x0b.api.ApiIds\x1a\x14.api.ApiListResponse\x12\x33\n\rListApiByName\x12\x0c.api.ApiName\x1a\x14.api.ApiListResponse\x12;\n\x11ListApiByCategory\x12\x10.api.ApiCategory\x1a\x14.api.ApiListResponse\x12\x35\n\rListApiOption\x12\x0e.api.ApiOption\x1a\x14.api.ApiListResponse\x12\x33\n\tCreateApi\x12\x0e.api.ApiSchema\x1a\x16.api.ApiCreateResponse\x12\x33\n\tUpdateApi\x12\x0e.api.ApiUpdate\x1a\x16.api.ApiChangeResponse\x12/\n\tDeleteApi\x12\n.api.ApiId\x1a\x16.api.ApiChangeResponse\x12=\n\rReadProcedure\x12\x10.api.ProcedureId\x1a\x1a.api.ProcedureReadResponse\x12\x45\n\x13ReadProcedureByName\x12\x12.api.ProcedureName\x1a\x1a.api.ProcedureReadResponse\x12\x43\n\x12ListProcedureByIds\x12\x11.api.ProcedureIds\x1a\x1a.api.ProcedureListResponse\x12<\n\x12ListProcedureByApi\x12\n.api.ApiId\x1a\x1a.api.ProcedureListResponse\x12\x45\n\x13ListProcedureByName\x12\x12.api.ProcedureName\x1a\x1a.api.ProcedureListResponse\x12G\n\x13ListProcedureOption\x12\x14.api.ProcedureOption\x1a\x1a.api.ProcedureListResponse\x12\x45\n\x0f\x43reateProcedure\x12\x14.api.ProcedureSchema\x1a\x1c.api.ProcedureCreateResponse\x12\x45\n\x0fUpdateProcedure\x12\x14.api.ProcedureUpdate\x1a\x1c.api.ProcedureChangeResponse\x12\x41\n\x0f\x44\x65leteProcedure\x12\x10.api.ProcedureId\x1a\x1c.api.ProcedureChangeResponseb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'rmcs_auth_api.api_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  DESCRIPTOR._loaded_options = None
  _globals['_APISCHEMA']._serialized_start=33
  _globals['_APISCHEMA']._serialized_end=206
  _globals['_APIID']._serialized_start=208
  _globals['_APIID']._serialized_end=227
  _globals['_APIIDS']._serialized_start=229
  _globals['_APIIDS']._serialized_end=250
  _globals['_APINAME']._serialized_start=252
  _globals['_APINAME']._serialized_end=275
  _globals['_APICATEGORY']._serialized_start=277
  _globals['_APICATEGORY']._serialized_end=308
  _globals['_APIOPTION']._serialized_start=310
  _globals['_APIOPTION']._serialized_end=385
  _globals['_APIUPDATE']._serialized_start=388
  _globals['_APIUPDATE']._serialized_end=627
  _globals['_PROCEDURESCHEMA']._serialized_start=629
  _globals['_PROCEDURESCHEMA']._serialized_end=724
  _globals['_PROCEDUREID']._serialized_start=726
  _globals['_PROCEDUREID']._serialized_end=751
  _globals['_PROCEDUREIDS']._serialized_start=753
  _globals['_PROCEDUREIDS']._serialized_end=780
  _globals['_PROCEDURENAME']._serialized_start=782
  _globals['_PROCEDURENAME']._serialized_end=827
  _globals['_PROCEDUREOPTION']._serialized_start=829
  _globals['_PROCEDUREOPTION']._serialized_end=906
  _globals['_PROCEDUREUPDATE']._serialized_start=908
  _globals['_PROCEDUREUPDATE']._serialized_end=1007
  _globals['_APIREADRESPONSE']._serialized_start=1009
  _globals['_APIREADRESPONSE']._serialized_end=1058
  _globals['_APILISTRESPONSE']._serialized_start=1060
  _globals['_APILISTRESPONSE']._serialized_end=1110
  _globals['_APICREATERESPONSE']._serialized_start=1112
  _globals['_APICREATERESPONSE']._serialized_end=1143
  _globals['_APICHANGERESPONSE']._serialized_start=1145
  _globals['_APICHANGERESPONSE']._serialized_end=1164
  _globals['_PROCEDUREREADRESPONSE']._serialized_start=1166
  _globals['_PROCEDUREREADRESPONSE']._serialized_end=1227
  _globals['_PROCEDURELISTRESPONSE']._serialized_start=1229
  _globals['_PROCEDURELISTRESPONSE']._serialized_end=1291
  _globals['_PROCEDURECREATERESPONSE']._serialized_start=1293
  _globals['_PROCEDURECREATERESPONSE']._serialized_end=1330
  _globals['_PROCEDURECHANGERESPONSE']._serialized_start=1332
  _globals['_PROCEDURECHANGERESPONSE']._serialized_end=1357
  _globals['_APISERVICE']._serialized_start=1360
  _globals['_APISERVICE']._serialized_end=2463
# @@protoc_insertion_point(module_scope)
