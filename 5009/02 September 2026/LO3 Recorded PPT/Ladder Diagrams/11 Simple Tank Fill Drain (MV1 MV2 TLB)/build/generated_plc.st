PROGRAM program0
  VAR
    TLB1 : BOOL;
    TLB2 : BOOL;
    MV1 : BOOL;
    MV2 : BOOL;
    Start : BOOL;
    Stop : BOOL;
    CycleOn : BOOL;
    Buzzer : BOOL;
    RS0 : RS;
    SR0 : SR;
    R_TRIG1 : R_TRIG;
    F_TRIG1 : F_TRIG;
  END_VAR

  RS0(S := Start, R1 := Stop);
  CycleOn := RS0.Q1;
  MV1 := NOT(MV2) AND NOT(TLB1) AND CycleOn;
  R_TRIG1(CLK := TLB1);
  F_TRIG1(CLK := TLB2);
  SR0(S1 := R_TRIG1.Q AND CycleOn, R := F_TRIG1.Q AND CycleOn);
  MV2 := SR0.Q1;
  Buzzer := SR0.Q1;
END_PROGRAM


CONFIGURATION Config0

  RESOURCE Res0 ON PLC
    TASK task0(INTERVAL := T#20ms,PRIORITY := 0);
    PROGRAM instance0 WITH task0 : program0;
  END_RESOURCE
END_CONFIGURATION
