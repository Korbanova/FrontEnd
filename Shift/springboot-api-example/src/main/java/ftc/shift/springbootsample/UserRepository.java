package ftc.shift.springbootsample;

import ftc.shift.springbootsample.models.User;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

/**
 * Сущность для доступа к данным пользователей (инкапсулирует логику хранения данных и доступа к ним)
 */
@Repository
public class UserRepository {

  //потокобезопасная переменная, которая "выдает" идентификаторы для сущностей
  private final AtomicLong sequence = new AtomicLong(1);
  //хранилище пользователей (используем вместо базы данных)
  private Map<String, User> users = new HashMap<>();

  public UserRepository() {
    //генерируем набор пользователей
    User user = new User(String.valueOf(sequence.getAndIncrement()), "Василий", 25);
    users.put(user.getId(), user);

    user = new User(String.valueOf(sequence.getAndIncrement()), "Егор", 15);
    users.put(user.getId(), user);

    user = new User(String.valueOf(sequence.getAndIncrement()), "Дементий", 36);
    users.put(user.getId(), user);

    user = new User(String.valueOf(sequence.getAndIncrement()), "Ольга", 33);
    users.put(user.getId(), user);

    user = new User(String.valueOf(sequence.getAndIncrement()), "Антон", 40);
    users.put(user.getId(), user);
  }

  public User find(String id) {
    return users.get(id);
  }

  public User update(User user) {

    User saved = users.get(user.getId());
    if (null != user.getAge()){
      saved.setAge(user.getAge());
    }

    if (null != user.getName() && !user.getName().isEmpty()) {
      saved.setName(user.getName());
    }
    return user;
  }

  public void delete(String id) {
    users.remove(id);
  }


  public User create(User user) {
    user.setId(String.valueOf(sequence.getAndIncrement()));
    users.put(user.getId(), user);
    return user;
  }

  public Collection<User> findAll() {
    return users.values();
  }

}
