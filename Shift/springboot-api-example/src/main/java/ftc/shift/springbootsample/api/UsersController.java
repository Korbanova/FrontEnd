package ftc.shift.springbootsample.api;


import ftc.shift.springbootsample.UserRepository;
import ftc.shift.springbootsample.configuration.ResourceNotFoundException;
import ftc.shift.springbootsample.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class UsersController {

  @Autowired
  private UserRepository userRepository;

  @GetMapping("/api/users/{id}")
  public @ResponseBody
  User readUser(@PathVariable String id) {
    User user = userRepository.find(id);
    if (null == user) {
      throw new ResourceNotFoundException();
    }
    return user;
  }

  @GetMapping("/api/users")
  public @ResponseBody
  Collection<User> listUser() {
    return userRepository.findAll();
  }

  @PostMapping("/api/users")
  public @ResponseBody
  User createUser(@RequestBody User user) {
    return userRepository.create(user);
  }

  @DeleteMapping("/api/users/{id}")
  public @ResponseBody
  void deleteUser(@PathVariable String id) {
    userRepository.delete(id);
  }

  @PutMapping("/api/users/{id}")
  public @ResponseBody
  User updateUser(@PathVariable String id, @RequestBody User user) {
    user.setId(id);
    return userRepository.update(user);
  }

}