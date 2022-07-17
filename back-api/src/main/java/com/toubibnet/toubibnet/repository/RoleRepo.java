package com.toubibnet.toubibnet.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.toubibnet.toubibnet.model.Role;

public interface RoleRepo  extends JpaRepository<Role,Long>{
	public Role findByName(String name);

}
