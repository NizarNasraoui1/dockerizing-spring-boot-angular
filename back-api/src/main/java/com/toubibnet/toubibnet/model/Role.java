package com.toubibnet.toubibnet.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import org.springframework.security.core.GrantedAuthority;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Role implements GrantedAuthority {
	public static String DOCTOR="DOCTOR";
	public static String USER="USER";	
	public static String ADMIN="ADMIN";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String name;
    @ManyToMany(mappedBy = "roles",cascade = CascadeType.ALL)
    @JsonIgnore
    List<User> users=new ArrayList<>();
	@Override
	public String getAuthority() {
		return this.name;
	}
}
