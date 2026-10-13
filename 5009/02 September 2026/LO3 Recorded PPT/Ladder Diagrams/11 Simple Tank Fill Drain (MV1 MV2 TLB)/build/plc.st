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
