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
  __INIT_VAR(data__->INLET,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->WATEROUTLET,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->OILOUTLET,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->TEMPSENSOR,0,retain)
  __INIT_VAR(data__->LEVELSENSOR,20,retain)
  __INIT_VAR(data__->TEMPREADING,0,retain)
  __INIT_VAR(data__->LEVELREADING,0,retain)
  __INIT_VAR(data__->_TMP_MUL13_OUT,0,retain)
  __INIT_VAR(data__->_TMP_DIV15_OUT,0,retain)
  __INIT_VAR(data__->_TMP_MUL19_OUT,0,retain)
  __INIT_VAR(data__->_TMP_DIV20_OUT,0,retain)
  __INIT_VAR(data__->_TMP_EQ9_OUT,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->_TMP_LE5_OUT,__BOOL_LITERAL(FALSE),retain)
  __INIT_VAR(data__->_TMP_LE1_OUT,__BOOL_LITERAL(FALSE),retain)
}

// Code part
void PROGRAM0_body__(PROGRAM0 *data__) {
  // Initialise TEMP variables

  __SET_VAR(data__->,_TMP_MUL13_OUT,,MUL__INT__INT(
    (BOOL)__BOOL_LITERAL(TRUE),
    NULL,
    (UINT)2,
    (INT)__GET_VAR(data__->TEMPSENSOR,),
    (INT)50));
  __SET_VAR(data__->,_TMP_DIV15_OUT,,DIV__INT__INT__INT(
    (BOOL)__BOOL_LITERAL(TRUE),
    NULL,
    (INT)__GET_VAR(data__->_TMP_MUL13_OUT,),
    (INT)1023));
  __SET_VAR(data__->,TEMPREADING,,__GET_VAR(data__->_TMP_DIV15_OUT,));
  __SET_VAR(data__->,_TMP_MUL19_OUT,,MUL__INT__INT(
    (BOOL)__BOOL_LITERAL(TRUE),
    NULL,
    (UINT)2,
    (INT)__GET_VAR(data__->LEVELSENSOR,),
    (INT)200));
  __SET_VAR(data__->,_TMP_DIV20_OUT,,DIV__INT__INT__INT(
    (BOOL)__BOOL_LITERAL(TRUE),
    NULL,
    (INT)__GET_VAR(data__->_TMP_MUL19_OUT,),
    (INT)1023));
  __SET_VAR(data__->,LEVELREADING,,__GET_VAR(data__->_TMP_DIV20_OUT,));
  __SET_VAR(data__->,_TMP_EQ9_OUT,,EQ__BOOL__INT(
    (BOOL)__BOOL_LITERAL(TRUE),
    NULL,
    (UINT)2,
    (INT)__GET_VAR(data__->LEVELSENSOR,),
    (INT)0));
  __SET_VAR(data__->,INLET,,((!(__GET_VAR(data__->OILOUTLET,)) && !(__GET_VAR(data__->WATEROUTLET,))) && __GET_VAR(data__->_TMP_EQ9_OUT,)));
  __SET_VAR(data__->,_TMP_LE5_OUT,,LE__BOOL__INT(
    (BOOL)__BOOL_LITERAL(TRUE),
    NULL,
    (UINT)2,
    (INT)__GET_VAR(data__->LEVELSENSOR,),
    (INT)20));
  __SET_VAR(data__->,OILOUTLET,,(!(__GET_VAR(data__->WATEROUTLET,)) && __GET_VAR(data__->_TMP_LE5_OUT,)));
  __SET_VAR(data__->,_TMP_LE1_OUT,,LE__BOOL__INT(
    (BOOL)__BOOL_LITERAL(TRUE),
    NULL,
    (UINT)2,
    (INT)__GET_VAR(data__->LEVELSENSOR,),
    (INT)200));
  __SET_VAR(data__->,WATEROUTLET,,((!(__GET_VAR(data__->INLET,)) && !(__GET_VAR(data__->OILOUTLET,))) && __GET_VAR(data__->_TMP_LE1_OUT,)));

  goto __end;

__end:
  return;
} // PROGRAM0_body__() 





