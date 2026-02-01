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
  TP_init__(&data__->TP0,retain);
  __INIT_VAR(data__->INLETVALVE1,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->INLETVALVE2,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->START,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->STOP,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->CYCLEON,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->LEVELSENSOR1,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->LEVELSENSOR2,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->AGITATORMOTOR,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->LOWLEVELSENSOR,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->OUTLETVALVE,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->TEMPERATURESENSOR,28,retain)
  __INIT_VAR(data__->FLAG,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->HEATER,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->_TMP_LT42_OUT,__BOOL_LITERAL(FALSE),retain)
}

// Code part
void PROGRAM0_body__(PROGRAM0 *data__) {
  // Initialise TEMP variables

  __SET_VAR(data__->,CYCLEON,,(!(__GET_VAR(data__->STOP,)) && (__GET_VAR(data__->CYCLEON,) || __GET_VAR(data__->START,))));
  __SET_VAR(data__->,INLETVALVE1,,((!(__GET_VAR(data__->LEVELSENSOR1,)) && !(__GET_VAR(data__->OUTLETVALVE,))) && __GET_VAR(data__->CYCLEON,)));
  __SET_VAR(data__->,INLETVALVE2,,(((!(__GET_VAR(data__->LEVELSENSOR2,)) && !(__GET_VAR(data__->INLETVALVE1,))) && !(__GET_VAR(data__->OUTLETVALVE,))) && __GET_VAR(data__->CYCLEON,)));
  __SET_VAR(data__->TP0.,IN,,(__GET_VAR(data__->LEVELSENSOR2,) && __GET_VAR(data__->CYCLEON,)));
  __SET_VAR(data__->TP0.,PT,,__time_to_timespec(1, 0, 5, 0, 0, 0));
  TP_body__(&data__->TP0);
  __SET_VAR(data__->,AGITATORMOTOR,,__GET_VAR(data__->TP0.Q,));
  __SET_VAR(data__->,OUTLETVALVE,,(((!(__GET_VAR(data__->INLETVALVE2,)) && !(__GET_VAR(data__->INLETVALVE1,))) && !(__GET_VAR(data__->AGITATORMOTOR,))) && __GET_VAR(data__->LOWLEVELSENSOR,)));
  __SET_VAR(data__->,_TMP_LT42_OUT,,LT__BOOL__INT(
    (BOOL)__BOOL_LITERAL(TRUE),
    NULL,
    (UINT)2,
    (INT)__GET_VAR(data__->TEMPERATURESENSOR,),
    (INT)30));
  __SET_VAR(data__->,FLAG,,__GET_VAR(data__->_TMP_LT42_OUT,));
  __SET_VAR(data__->,HEATER,,(__GET_VAR(data__->FLAG,) && __GET_VAR(data__->CYCLEON,)));

  goto __end;

__end:
  return;
} // PROGRAM0_body__() 





