CREATE INDEX idx_profiles_role
ON profiles(role_id);

CREATE INDEX idx_animals_owner
ON animals(owner_id);

CREATE INDEX idx_animals_tag
ON animals(animal_tag);

CREATE INDEX idx_drugs_name
ON drugs(drug_name);

CREATE INDEX idx_rules_drug
ON withdrawal_rules(drug_id);

CREATE INDEX idx_entries_animal
ON drug_entries(animal_id);

CREATE INDEX idx_entries_drug
ON drug_entries(drug_id);

CREATE INDEX idx_entries_date
ON drug_entries(treatment_date);

CREATE INDEX idx_entries_withdrawal
ON drug_entries(withdrawal_end_date);

CREATE INDEX idx_entries_administered_by
ON drug_entries(administered_by);