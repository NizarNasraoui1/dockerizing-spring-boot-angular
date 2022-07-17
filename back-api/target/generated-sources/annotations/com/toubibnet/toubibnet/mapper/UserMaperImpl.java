package com.toubibnet.toubibnet.mapper;

import com.toubibnet.toubibnet.dto.UserDto;
import com.toubibnet.toubibnet.model.User;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-05-14T19:49:52+0200",
    comments = "version: 1.4.2.Final, compiler: Eclipse JDT (IDE) 1.4.50.v20210914-1429, environment: Java 17.0.2 (Eclipse Adoptium)"
)
@Component
public class UserMaperImpl implements UserMaper {

    @Override
    public List<UserDto> toDtos(List<User> dtos) {
        if ( dtos == null ) {
            return null;
        }

        List<UserDto> list = new ArrayList<UserDto>( dtos.size() );
        for ( User user : dtos ) {
            list.add( toDto( user ) );
        }

        return list;
    }

    @Override
    public List<User> toBos(List<UserDto> bos) {
        if ( bos == null ) {
            return null;
        }

        List<User> list = new ArrayList<User>( bos.size() );
        for ( UserDto userDto : bos ) {
            list.add( toBo( userDto ) );
        }

        return list;
    }

    @Override
    public UserDto toDto(User bo) {
        if ( bo == null ) {
            return null;
        }

        UserDto userDto = new UserDto();

        return userDto;
    }

    @Override
    public User toBo(UserDto dto) {
        if ( dto == null ) {
            return null;
        }

        User user = new User();

        return user;
    }

    @Override
    public User fillBo(UserDto dto, User bo) {
        if ( dto == null ) {
            return null;
        }

        return bo;
    }
}
