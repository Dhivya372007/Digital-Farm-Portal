INSERT INTO withdrawal_rules
(drug_id, withdrawal_days, residue_limit, notes)

SELECT

drug_id,

28,

0.10,

'Default withdrawal period'

FROM drugs;