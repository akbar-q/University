TYPE
  LOGLEVEL : (CRITICAL, WARNING, INFO, DEBUG) := INFO;
END_TYPE

FUNCTION_BLOCK LOGGER
  VAR_INPUT
    TRIG : BOOL;
    MSG : STRING;
    LEVEL : LOGLEVEL := INFO;
  END_VAR
  VAR
    TRIG0 : BOOL;
  END_VAR

  IF TRIG AND NOT TRIG0 THEN
  {{
   LogMessage(GetFbVar(LEVEL),(char*)GetFbVar(MSG, .body),GetFbVar(MSG, .len));
  }}
  END_IF;
  TRIG0:=TRIG;
END_FUNCTION_BLOCK


PROGRAM program0
  VAR
    TP0 : TP;
  END_VAR
  VAR
    InletValve1 : BOOL;
    InletValve2 : BOOL;
    Start : BOOL;
    Stop : BOOL;
    CycleOn : BOOL;
    LevelSensor1 : BOOL;
    LevelSensor2 : BOOL;
    AgitatorMotor : BOOL;
    LowLevelSensor : BOOL;
    OutletValve : BOOL;
    TemperatureSensor : INT := 28;
  END_VAR
  VAR
    Flag : BOOL;
  END_VAR
  VAR
    Heater : BOOL;
  END_VAR
  VAR
    _TMP_LT42_OUT : BOOL;
  END_VAR

  CycleOn := NOT(Stop) AND (CycleOn OR Start);
  InletValve1 := NOT(LevelSensor1) AND NOT(OutletValve) AND CycleOn;
  InletValve2 := NOT(LevelSensor2) AND NOT(InletValve1) AND NOT(OutletValve) AND CycleOn;
  TP0(IN := LevelSensor2 AND CycleOn, PT := t#5s);
  AgitatorMotor := TP0.Q;
  OutletValve := NOT(InletValve2) AND NOT(InletValve1) AND NOT(AgitatorMotor) AND LowLevelSensor;
  _TMP_LT42_OUT := LT(TemperatureSensor, 30);
  Flag := _TMP_LT42_OUT;
  Heater := Flag AND CycleOn;
END_PROGRAM


CONFIGURATION Config0

  RESOURCE Res0 ON PLC
    TASK task0(INTERVAL := T#20ms,PRIORITY := 0);
    PROGRAM instance0 WITH task0 : program0;
  END_RESOURCE
END_CONFIGURATION
