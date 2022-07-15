/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-misused-promises */
//eslint-disable @typescript-eslint/no-misused-promises /
// eslint-disable-next-line import/order
import { useState, useEffect } from 'react';
// eslint-disable-next-line import/order
import styles from './github.style.scss';
import { githubSerive } from '~/app/github/github.service';

export const Github = () => {
  const [github_input, setGithubInput_Form] = useState<string>('');
  const [userAvatarGithub, setUserAvatarGithub] = useState<string>();
  const [userNameGithub, setUserNameGithub] = useState<string>();
  const [userLoginGithub, setUserLoginGithub] = useState<string>();
  const [Repositories, setRepositories] = useState<string[][]>([]);
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(1);
  }, []);
  const findUser = async () => {
    const users = await githubSerive.getProfile(github_input);
    const projects = await githubSerive.getRepos(github_input);
    // eslint-disable-next-line no-console
    console.log(users);
    // eslint-disable-next-line no-console
    console.log(projects);
    setUserAvatarGithub(users.avatar);
    setUserNameGithub(users.name);
    setUserLoginGithub(users.login);
    // eslint-disable-next-line prefer-const
    let mass = [];
    // eslint-disable-next-line @typescript-eslint/no-for-in-array, prefer-const
    for (let element in projects) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      mass.push([projects[element].name, projects[element].language!])
    }
    setRepositories(mass);
    // eslint-disable-next-line no-console
    console.log(Repositories);
  };
  return (
    <section className={styles.github}>
      <h1 className={styles.github__content}>Поиск пользователей Github</h1>
      <div>
        <input
          type="text"
          placeholder="Введите имя профиля"
          onChange={e => setGithubInput_Form(e.target.value)}
        />
        <button type="submit" onClick={findUser}>
          Поиск
        </button>
      </div>
      <img src={`${userAvatarGithub}`} />
      <h3>Имя пользователя: {userNameGithub} </h3>
      <h3>Логин: {userLoginGithub }</h3>
      <h3>Проекты:</h3>
      {
        Repositories ? (
          Repositories.map((data, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'row' }}>
              <div>{data[0]}</div>
              <div>/{data[1]}</div>
            </div>
          ))
        )
          : (null)
      }
    </section>
  );
};