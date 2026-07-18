CREATE TABLE animals (

    animal_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    owner_id UUID NOT NULL,

    animal_tag VARCHAR(100) NOT NULL UNIQUE,

    species VARCHAR(50) NOT NULL,

    breed VARCHAR(100),

    gender VARCHAR(20),

    age INTEGER,

    weight NUMERIC(8,2),

    status VARCHAR(30) DEFAULT 'Healthy',

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    deleted_at TIMESTAMPTZ
);