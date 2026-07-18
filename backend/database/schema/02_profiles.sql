CREATE TABLE profiles (

    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,

    role_id UUID NOT NULL,

    full_name VARCHAR(150) NOT NULL,

    phone VARCHAR(20),

    farm_name VARCHAR(150),

    address TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    deleted_at TIMESTAMPTZ
);