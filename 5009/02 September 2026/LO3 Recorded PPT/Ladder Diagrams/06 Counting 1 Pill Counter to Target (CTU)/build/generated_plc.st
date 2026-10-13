PROGRAM program0
  VAR
    PillSensor AT %IX0.3 : BOOL;
    Reset AT %IX0.1 : BOOL;
    Packager AT %QX0.0 : BOOL;
    CycleComplete AT %QX0.2 : BOOL;
  END_VAR
  VAR
    Trigger : BOOL;
    CTU0 : CTU;
    TOF0 : TOF;
    R_TRIG1 : R_TRIG;
    R_TRIG2 : R_TRIG;
  END_VAR

  R_TRIG1(CLK := PillSensor);
  R_TRIG2(CLK := R_TRIG1.Q);
  CTU0(CU := R_TRIG2.Q, R := CTU0.Q, PV := 10);
  TOF0(IN := CTU0.Q, PT := t#1s);
  Packager := TOF0.Q;
  CycleComplete := TOF0.Q;
END_PROGRAM


CONFIGURATION Config0

  RESOURCE Res0 ON PLC
    TASK task0(INTERVAL := T#20ms,PRIORITY := 0);
    PROGRAM instance0 WITH task0 : program0;
  END_RESOURCE
END_CONFIGURATION
