void LOGGER_init__(LOGGER *data__, BOOL retain) {
  __INIT_VAR(data__->EN,__BOOL_LITERAL(TRUE),retain)
  __INIT_VAR(data__->ENO,__BOOL_LITERAL(TRUE),retain)
  __INIT_VAR(data__->TRIG,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->MSG,__STRING_LITERAL(0,""),retain)
  __INIT_VAR(data__->LEVEL,LOGLEVEL__INFO,retain)
  __INIT_VAR(data__->TRIG0,__BOOL_LITERAL(FALSE),retain)
}

// Code part
void LOGGER_body__(LOGGER *data__) {
  // Control execution
  if (!__GET_VAR(data__->EN)) {
    __SET_VAR(data__->,ENO,,__BOOL_LITERAL(FALSE));
    return;
  }
  else {
    __SET_VAR(data__->,ENO,,__BOOL_LITERAL(TRUE));
  }
  // Initialise TEMP variables

  if ((__GET_VAR(data__->TRIG,) && !(__GET_VAR(data__->TRIG0,)))) {
    #define GetFbVar(var,...) __GET_VAR(data__->var,__VA_ARGS__)
    #define SetFbVar(var,val,...) __SET_VAR(data__->,var,__VA_ARGS__,val)

   LogMessage(GetFbVar(LEVEL),(char*)GetFbVar(MSG, .body),GetFbVar(MSG, .len));
  
    #undef GetFbVar
    #undef SetFbVar
;
  };
  __SET_VAR(data__->,TRIG0,,__GET_VAR(data__->TRIG,));

  goto __end;

__end:
  return;
} // LOGGER_body__() 





void PROGRAM0_init__(PROGRAM0 *data__, BOOL retain) {
  __INIT_VAR(data__->SENSOR,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->FLAG,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->COUNT,1,retain)
  __INIT_VAR(data__->ONE,1,retain)
  __INIT_VAR(data__->TWO,2,retain)
  TON_init__(&data__->TON0,retain);
  __INIT_VAR(data__->_TMP_GE6_OUT,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->_TMP_BOOL_TO_INT9_OUT,0,retain)
  __INIT_VAR(data__->_TMP_ADD4_OUT,0,retain)
}

// Code part
void PROGRAM0_body__(PROGRAM0 *data__) {
  // Initialise TEMP variables

  __SET_VAR(data__->,_TMP_GE6_OUT,,GE__BOOL__BOOL(
    (BOOL)__BOOL_LITERAL(TRUE),
    NULL,
    (UINT)2,
    (BOOL)__GET_VAR(data__->SENSOR,),
    (BOOL)1));
  __SET_VAR(data__->,_TMP_BOOL_TO_INT9_OUT,,BOOL_TO_INT(
    (BOOL)__BOOL_LITERAL(TRUE),
    NULL,
    (BOOL)(!(__GET_VAR(data__->FLAG,)) && __GET_VAR(data__->_TMP_GE6_OUT,))));
  __SET_VAR(data__->,_TMP_ADD4_OUT,,ADD__INT__INT(
    (BOOL)__BOOL_LITERAL(TRUE),
    NULL,
    (UINT)2,
    (INT)__GET_VAR(data__->_TMP_BOOL_TO_INT9_OUT,),
    (INT)__GET_VAR(data__->COUNT,)));
  __SET_VAR(data__->,COUNT,,__GET_VAR(data__->_TMP_ADD4_OUT,));
  __SET_VAR(data__->TON0.,IN,,__GET_VAR(data__->_TMP_GE6_OUT,));
  __SET_VAR(data__->TON0.,PT,,__time_to_timespec(1, 1, 0, 0, 0, 0));
  TON_body__(&data__->TON0);
  __SET_VAR(data__->,FLAG,,__GET_VAR(data__->TON0.Q,));

  goto __end;

__end:
  return;
} // PROGRAM0_body__() 





