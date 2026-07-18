ALTER TABLE profiles
ADD CONSTRAINT fk_profiles_role
FOREIGN KEY (role_id)
REFERENCES roles(role_id);

ALTER TABLE animals
ADD CONSTRAINT fk_animals_owner
FOREIGN KEY (owner_id)
REFERENCES profiles(id);

ALTER TABLE withdrawal_rules
ADD CONSTRAINT fk_rules_drug
FOREIGN KEY (drug_id)
REFERENCES drugs(drug_id);

ALTER TABLE drug_entries
ADD CONSTRAINT fk_entries_animal
FOREIGN KEY (animal_id)
REFERENCES animals(animal_id);

ALTER TABLE drug_entries
ADD CONSTRAINT fk_entries_drug
FOREIGN KEY (drug_id)
REFERENCES drugs(drug_id);

ALTER TABLE drug_entries
ADD CONSTRAINT fk_entries_user
FOREIGN KEY (administered_by)
REFERENCES profiles(id);