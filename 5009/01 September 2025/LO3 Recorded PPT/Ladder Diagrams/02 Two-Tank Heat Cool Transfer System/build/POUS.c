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
  __INIT_VAR(data__->START,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->STOP,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->CYCLEON,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->INLETVALVE,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->LEVELSENSOR2,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->VALVE2,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->TEMPSENSOR1,59,retain)
  __INIT_VAR(data__->TEMPSENSOR2,12,retain)
  __INIT_VAR(data__->OUTLETVALVE1,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->OUTLETVALVE2,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->HEATER,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->LEVELSENSOR4,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->LEVELSENSOR1,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->LEVELSENSOR3,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->VALVE3,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->COOLER,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->_TMP_LT51_OUT,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->_TMP_GT17_OUT,__BOOL_LITERAL(FALSE),retain)
}

// Code part
void PROGRAM0_body__(PROGRAM0 *data__) {
  // Initialise TEMP variables

  __SET_VAR(data__->,CYCLEON,,(!(__GET_VAR(data__->STOP,)) && (__GET_VAR(data__->CYCLEON,) || __GET_VAR(data__->START,))));
  __SET_VAR(data__->,INLETVALVE,,(!(__GET_VAR(data__->STOP,)) && (__GET_VAR(data__->CYCLEON,) || __GET_VAR(data__->START,))));
  __SET_VAR(data__->,VALVE2,,((!(__GET_VAR(data__->LEVELSENSOR2,)) && !(__GET_VAR(data__->OUTLETVALVE1,))) && __GET_VAR(data__->CYCLEON,)));
  __SET_VAR(data__->,_TMP_LT51_OUT,,LT__BOOL__INT(
    (BOOL)__BOOL_LITERAL(TRUE),
    NULL,
    (UINT)2,
    (INT)__GET_VAR(data__->TEMPSENSOR1,),
    (INT)60));
  __SET_VAR(data__->,HEATER,,(__GET_VAR(data__->CYCLEON,) && __GET_VAR(data__->_TMP_LT51_OUT,)));
  __SET_VAR(data__->,OUTLETVALVE1,,(!(__GET_VAR(data__->LEVELSENSOR1,)) && !(__GET_VAR(data__->HEATER,))));
  __SET_VAR(data__->,CYCLEON,,(!(__GET_VAR(data__->STOP,)) && (__GET_VAR(data__->CYCLEON,) || __GET_VAR(data__->START,))));
  __SET_VAR(data__->,INLETVALVE,,(!(__GET_VAR(data__->STOP,)) && (__GET_VAR(data__->CYCLEON,) || __GET_VAR(data__->START,))));
  __SET_VAR(data__->,VALVE3,,((!(__GET_VAR(data__->LEVELSENSOR4,)) && !(__GET_VAR(data__->OUTLETVALVE2,))) && __GET_VAR(data__->CYCLEON,)));
  __SET_VAR(data__->,_TMP_GT17_OUT,,GT__BOOL__INT(
    (BOOL)__BOOL_LITERAL(TRUE),
    NULL,
    (UINT)2,
    (INT)__GET_VAR(data__->TEMPSENSOR2,),
    (INT)10));
  __SET_VAR(data__->,COOLER,,(__GET_VAR(data__->CYCLEON,) && __GET_VAR(data__->_TMP_GT17_OUT,)));
  __SET_VAR(data__->,OUTLETVALVE2,,(!(__GET_VAR(data__->LEVELSENSOR3,)) && !(__GET_VAR(data__->COOLER,))));

  goto __end;

__end:
  return;
} // PROGRAM0_body__() 





