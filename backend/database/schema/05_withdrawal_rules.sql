CREATE TABLE withdrawal_rules (

    rule_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    drug_id UUID NOT NULL,

    withdrawal_days INTEGER NOT NULL,

    residue_limit NUMERIC(8,2),

    notes TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);