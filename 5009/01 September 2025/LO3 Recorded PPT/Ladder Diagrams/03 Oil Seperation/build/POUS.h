#include "beremiz.h"
#ifndef __POUS_H
#define __POUS_H

#include "accessor.h"
#include "iec_std_lib.h"

__DECLARE_ENUMERATED_TYPE(LOGLEVEL,
  LOGLEVEL__CRITICAL,
  LOGLEVEL__WARNING,
  LOGLEVEL__INFO,
  LOGLEVEL__DEBUG
)
// FUNCTION_BLOCK LOGGER
// Data part
typedef struct {
  // FB Interface - IN, OUT, IN_OUT variables
  __DECLARE_VAR(BOOL,EN)
  __DECLARE_VAR(BOOL,ENO)
  __DECLARE_VAR(BOOL,TRIG)
  __DECLARE_VAR(STRING,MSG)
  __DECLARE_VAR(LOGLEVEL,LEVEL)

  // FB private variables - TEMP, private and located variables
  __DECLARE_VAR(BOOL,TRIG0)

} LOGGER;

void LOGGER_init__(LOGGER *data__, BOOL retain);
// Code part
void LOGGER_body__(LOGGER *data__);
// PROGRAM PROGRAM0
// Data part
typedef struct {
  // PROGRAM Interface - IN, OUT, IN_OUT variables

  // PROGRAM private variables - TEMP, private and located variables
  __DECLARE_VAR(BOOL,INLET)
  __DECLARE_VAR(BOOL,WATEROUTLET)
  __DECLARE_VAR(BOOL,OILOUTLET)
  __DECLARE_VAR(INT,TEMPSENSOR)
  __DECLARE_VAR(INT,LEVELSENSOR)
  __DECLARE_VAR(INT,TEMPREADING)
  __DECLARE_VAR(INT,LEVELREADING)
  __DECLARE_VAR(INT,_TMP_MUL13_OUT)
  __DECLARE_VAR(INT,_TMP_DIV15_OUT)
  __DECLARE_VAR(INT,_TMP_MUL19_OUT)
  __DECLARE_VAR(INT,_TMP_DIV20_OUT)
  __DECLARE_VAR(BOOL,_TMP_EQ9_OUT)
  __DECLARE_VAR(BOOL,_TMP_LE5_OUT)
  __DECLARE_VAR(BOOL,_TMP_LE1_OUT)

} PROGRAM0;

void PROGRAM0_init__(PROGRAM0 *data__, BOOL retain);
// Code part
void PROGRAM0_body__(PROGRAM0 *data__);
#endif //__POUS_H
