package com.blogger.poc.persistence.dao.hibernate.entities;

import com.blogger.poc.persistence.domain.enums.UserType;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.OffsetDateTime;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "users")
public class UserEntity {

	@Id
	@GeneratedValue(strategy = IDENTITY)
	private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "display_name")
	private String displayName;

	@Column(name = "registered")
	private OffsetDateTime registered;

	@Column(name = "type")
	@Enumerated(EnumType.STRING)
	private UserType type;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDisplayName() {
		return displayName;
	}

	public void setDisplayName(String displayName) {
		this.displayName = displayName;
	}

	public OffsetDateTime getRegistered() {
		return registered;
	}

	public void setRegistered(OffsetDateTime registered) {
		this.registered = registered;
	}

	public UserType getType() {
		return type;
	}

	public void setType(UserType type) {
		this.type = type;
	}
}
