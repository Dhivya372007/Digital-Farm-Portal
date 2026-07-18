CREATE TABLE drug_entries (

    entry_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    animal_id UUID NOT NULL,

    drug_id UUID NOT NULL,

    administered_by UUID NOT NULL,

    dosage VARCHAR(100),

    treatment_date DATE NOT NULL,

    withdrawal_end_date DATE NOT NULL,

    sold_before_safe_date BOOLEAN DEFAULT FALSE,

    notes TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    deleted_at TIMESTAMPTZ
);