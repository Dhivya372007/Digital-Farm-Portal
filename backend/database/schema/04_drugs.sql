CREATE TABLE drugs (

    drug_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    drug_name VARCHAR(150) NOT NULL UNIQUE,

    category VARCHAR(100),

    active_ingredient VARCHAR(150),

    manufacturer VARCHAR(150),

    description TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);