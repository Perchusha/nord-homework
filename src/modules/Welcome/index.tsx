import { useSelector } from 'react-redux';
import { selectUsername } from '../../redux/selectors';
import { Wrapper, Title, Description, Remark } from './styled';

export const Welcome = () => {
  const username = useSelector(selectUsername);

  const getTitle = (username: string) => {
    if (username) {
      return `Hello, ${username}!`;
    } else {
      return `Hello there! First you may to login.`;
    }
  };

  return (
    <Wrapper>
      <Title>{getTitle(username)}</Title>
      <Description>
        Nord is a remarkable company that has gained a reputation for excellence in its field.
        Founded with a commitment to providing top-notch services and products, Nord has
        consistently lived up to its mission and has become a prominent player in the industry.
      </Description>
      <Description>
        One of the standout features of Nord is its unwavering dedication to customer satisfaction.
        The company goes above and beyond to ensure that its clients receive the best possible
        service, making them feel valued and appreciated. Nord's customer support team is renowned
        for its responsiveness and expertise, always ready to assist customers with any queries or
        issues they may have.
      </Description>
      <Description>
        Innovation is at the core of Nord's success. The company continuously invests in research
        and development to stay at the forefront of technological advancements. As a result, Nord
        offers cutting-edge solutions that are both efficient and user-friendly. Whether it's their
        state-of-the-art security software or their high-speed VPN services, Nord consistently
        delivers products that exceed expectations.
      </Description>
      <Description>
        Nord is also committed to ethical business practices and values privacy and security. Their
        VPN services, for instance, are known for their robust encryption and strict no-logs policy,
        ensuring that users' data remains confidential and protected. This commitment to data
        security has earned Nord the trust of millions of users worldwide.
      </Description>
      <Description>
        Furthermore, Nord takes its corporate social responsibility seriously. The company actively
        engages in initiatives aimed at reducing its environmental footprint and giving back to the
        community. They are involved in various charitable activities and are committed to
        sustainability.
      </Description>
      <Description>
        In conclusion, Nord is an outstanding company that combines exceptional customer service,
        cutting-edge technology, ethical business practices, and a commitment to making a positive
        impact on the world. It's no wonder that Nord has earned its reputation as a class-leading
        company in its industry.
      </Description>
      <Remark>This text was written using free version of ChatGPT.</Remark>
    </Wrapper>
  );
};
