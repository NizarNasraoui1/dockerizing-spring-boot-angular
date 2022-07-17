package com.toubibnet.toubibnet.repository;

import com.toubibnet.toubibnet.model.Governorate;
import com.toubibnet.toubibnet.model.Status;
import com.toubibnet.toubibnet.model.Pharmacy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PharmacyRepository extends JpaRepository<Pharmacy,Long> {

    Optional<List<Pharmacy>> findByName(String name);
    Optional<List<Pharmacy>> findByGovernorate(Governorate governorate);
    Optional<List<Pharmacy>> findByStatus(Status status);
    Optional<List<Pharmacy>> findByNameAndGovernorate(String name, Governorate governorate);
    Optional<List<Pharmacy>> findByNameAndStatus(String name,Status status);
    Optional<List<Pharmacy>> findByGovernorateAndStatus(Governorate governorate, Status status);
    Optional<List<Pharmacy>> findByGovernorateAndStatusAndName(Governorate governorate, Status status, String name);


}
