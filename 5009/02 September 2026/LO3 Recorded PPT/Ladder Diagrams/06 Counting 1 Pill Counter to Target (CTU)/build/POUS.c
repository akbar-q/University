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
  __INIT_VAR(data__->PILLSENSOR,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->RESET,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->PACKAGER,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->CYCLECOMPLETE,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->TRIGGER,__BOOL_LITERAL(FALSE),retain)
  CTU_init__(&data__->CTU0,retain);
  TOF_init__(&data__->TOF0,retain);
  R_TRIG_init__(&data__->R_TRIG1,retain);
  R_TRIG_init__(&data__->R_TRIG2,retain);
}

// Code part
void PROGRAM0_body__(PROGRAM0 *data__) {
  // Initialise TEMP variables

  __SET_VAR(data__->R_TRIG1.,CLK,,__GET_VAR(data__->PILLSENSOR,));
  R_TRIG_body__(&data__->R_TRIG1);
  __SET_VAR(data__->R_TRIG2.,CLK,,__GET_VAR(data__->R_TRIG1.Q,));
  R_TRIG_body__(&data__->R_TRIG2);
  __SET_VAR(data__->CTU0.,CU,,__GET_VAR(data__->R_TRIG2.Q,));
  __SET_VAR(data__->CTU0.,R,,__GET_VAR(data__->CTU0.Q,));
  __SET_VAR(data__->CTU0.,PV,,10);
  CTU_body__(&data__->CTU0);
  __SET_VAR(data__->TOF0.,IN,,__GET_VAR(data__->CTU0.Q,));
  __SET_VAR(data__->TOF0.,PT,,__time_to_timespec(1, 0, 1, 0, 0, 0));
  TOF_body__(&data__->TOF0);
  __SET_VAR(data__->,PACKAGER,,__GET_VAR(data__->TOF0.Q,));
  __SET_VAR(data__->,CYCLECOMPLETE,,__GET_VAR(data__->TOF0.Q,));

  goto __end;

__end:
  return;
} // PROGRAM0_body__() 





