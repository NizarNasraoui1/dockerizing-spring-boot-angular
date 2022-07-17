package com.toubibnet.toubibnet.mapper;

import com.toubibnet.toubibnet.dto.UserDto;
import com.toubibnet.toubibnet.model.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMaper extends GenericMapper<User, UserDto>{

}
