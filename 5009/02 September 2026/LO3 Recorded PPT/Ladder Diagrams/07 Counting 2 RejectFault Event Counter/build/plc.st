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
    PillSensor : BOOL;
    Reset : BOOL;
    Packager : BOOL;
    CycleComplete : BOOL;
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
