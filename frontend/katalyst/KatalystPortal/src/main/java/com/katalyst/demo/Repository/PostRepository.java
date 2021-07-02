package com.katalyst.demo.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.katalyst.demo.model.Post;

@Repository
public interface PostRepository extends CrudRepository<Post,Integer>{

}
