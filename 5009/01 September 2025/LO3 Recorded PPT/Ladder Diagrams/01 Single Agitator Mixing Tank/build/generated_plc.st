PROGRAM program0
  VAR
    TP0 : TP;
  END_VAR
  VAR
    InletValve1 AT %QX0.1 : BOOL;
    InletValve2 AT %QX0.2 : BOOL;
    Start AT %IX0.1 : BOOL;
    Stop AT %IX0.2 : BOOL;
    CycleOn AT %IX0.3 : BOOL;
    LevelSensor1 AT %IX0.4 : BOOL;
    LevelSensor2 AT %IX0.5 : BOOL;
    AgitatorMotor AT %QX0.3 : BOOL;
    LowLevelSensor AT %IX0.6 : BOOL;
    OutletValve AT %QX0.4 : BOOL;
    TemperatureSensor AT %IW0 : INT := 28;
  END_VAR
  VAR
    Flag : BOOL;
  END_VAR
  VAR
    Heater AT %QX1.0 : BOOL;
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
