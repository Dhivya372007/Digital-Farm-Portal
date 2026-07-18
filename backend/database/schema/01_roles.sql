CREATE TABLE roles (
    role_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    role_name VARCHAR(50) NOT NULL UNIQUE,

    description TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);