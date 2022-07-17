package com.toubibnet.toubibnet.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.toubibnet.toubibnet.model.Doctor;

import com.toubibnet.toubibnet.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface DoctorRepo  extends JpaRepository<Doctor,Long> {
}
