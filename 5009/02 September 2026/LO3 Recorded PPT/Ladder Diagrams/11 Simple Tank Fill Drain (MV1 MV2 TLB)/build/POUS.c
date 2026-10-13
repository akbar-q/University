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
  __INIT_VAR(data__->TLB1,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->TLB2,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->MV1,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->MV2,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->START,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->STOP,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->CYCLEON,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->BUZZER,__BOOL_LITERAL(FALSE),retain)
  RS_init__(&data__->RS0,retain);
  SR_init__(&data__->SR0,retain);
  R_TRIG_init__(&data__->R_TRIG1,retain);
  F_TRIG_init__(&data__->F_TRIG1,retain);
}

// Code part
void PROGRAM0_body__(PROGRAM0 *data__) {
  // Initialise TEMP variables

  __SET_VAR(data__->RS0.,S,,__GET_VAR(data__->START,));
  __SET_VAR(data__->RS0.,R1,,__GET_VAR(data__->STOP,));
  RS_body__(&data__->RS0);
  __SET_VAR(data__->,CYCLEON,,__GET_VAR(data__->RS0.Q1,));
  __SET_VAR(data__->,MV1,,((!(__GET_VAR(data__->MV2,)) && !(__GET_VAR(data__->TLB1,))) && __GET_VAR(data__->CYCLEON,)));
  __SET_VAR(data__->R_TRIG1.,CLK,,__GET_VAR(data__->TLB1,));
  R_TRIG_body__(&data__->R_TRIG1);
  __SET_VAR(data__->F_TRIG1.,CLK,,__GET_VAR(data__->TLB2,));
  F_TRIG_body__(&data__->F_TRIG1);
  __SET_VAR(data__->SR0.,S1,,(__GET_VAR(data__->R_TRIG1.Q,) && __GET_VAR(data__->CYCLEON,)));
  __SET_VAR(data__->SR0.,R,,(__GET_VAR(data__->F_TRIG1.Q,) && __GET_VAR(data__->CYCLEON,)));
  SR_body__(&data__->SR0);
  __SET_VAR(data__->,MV2,,__GET_VAR(data__->SR0.Q1,));
  __SET_VAR(data__->,BUZZER,,__GET_VAR(data__->SR0.Q1,));

  goto __end;

__end:
  return;
} // PROGRAM0_body__() 





