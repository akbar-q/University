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
  __INIT_LOCATED(BOOL,__QX0_6,data__->LED,retain)
  __INIT_LOCATED_VALUE(data__->LED,__BOOL_LITERAL(FALSE))
  __INIT_LOCATED(BOOL,__IX0_2,data__->START,retain)
  __INIT_LOCATED_VALUE(data__->START,__BOOL_LITERAL(FALSE))
  __INIT_LOCATED(BOOL,__IX0_3,data__->STOP,retain)
  __INIT_LOCATED_VALUE(data__->STOP,__BOOL_LITERAL(FALSE))
  __INIT_LOCATED(BOOL,__QX0_5,data__->RUN,retain)
  __INIT_LOCATED_VALUE(data__->RUN,1)
  __INIT_VAR(data__->TRIGGER,__BOOL_LITERAL(FALSE),retain)
  TOF_init__(&data__->TOF0,retain);
  TON_init__(&data__->TON0,retain);
  SR_init__(&data__->SR0,retain);
}

// Code part
void PROGRAM0_body__(PROGRAM0 *data__) {
  // Initialise TEMP variables

  __SET_VAR(data__->TOF0.,IN,,!(__GET_LOCATED(data__->LED,)));
  __SET_VAR(data__->TOF0.,PT,,__time_to_timespec(1, 2500, 0, 0, 0, 0));
  TOF_body__(&data__->TOF0);
  __SET_VAR(data__->TON0.,IN,,__GET_VAR(data__->TOF0.Q,));
  __SET_VAR(data__->TON0.,PT,,__time_to_timespec(1, 2500, 0, 0, 0, 0));
  TON_body__(&data__->TON0);
  __SET_LOCATED(data__->,LED,,__GET_VAR(data__->TON0.Q,));
  __SET_VAR(data__->SR0.,S1,,__GET_LOCATED(data__->START,));
  __SET_VAR(data__->SR0.,R,,__GET_LOCATED(data__->STOP,));
  SR_body__(&data__->SR0);
  __SET_LOCATED(data__->,RUN,,__GET_VAR(data__->SR0.Q1,));

  goto __end;

__end:
  return;
} // PROGRAM0_body__() 





