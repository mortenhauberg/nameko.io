import * as React from 'react';
import { css } from 'emotion';
import { Flex } from '@rebass/grid/emotion';

import { colors, media } from '../../utils/css';

// Courtesy of https://github.com/facebook/immutable-js/blob/master/pages/src/src/StarBtn.less
const githubButtonStyles = css`
  .github-btn {
    display: flex;
    flex-direction: row;
  }

  .gh-ico {
    float: left;
  }

  .gh-btn,
  .gh-count {
    border: 1px solid #bababa;
    border-bottom-color: #a6a6a6;
    border-radius: 6px;
    color: #212121;
    cursor: pointer;
    font-size: 24px;
    font-weight: 300;
    line-height: 32px;
    padding: 6px 14px 6px 12px;
    text-decoration: none;
    text-shadow: 0 1px 0 #fff;
    white-space: nowrap;
  }

  .gh-btn {
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#fafafa),
      to(#eaeaea)
    );
    background: -webkit-linear-gradient(top, #fafafa, #eaeaea);
    background: -moz-linear-gradient(top, #fafafa, #eaeaea);
    background: -ms-linear-gradient(top, #fafafa, #eaeaea);
    background: -o-linear-gradient(top, #fafafa, #eaeaea);
  }

  .gh-btn:hover,
  .gh-btn:focus,
  .gh-btn:active {
    background-color: #3072b3;
    border-color: #518cc6 #518cc6 #2a65a0;
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  }

  .gh-btn:hover,
  .gh-btn:focus {
    background-color: #599bdc;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#599bdc),
      to(#3072b3)
    );
    background: -webkit-linear-gradient(top, #599bdc, #3072b3);
    background: -moz-linear-gradient(top, #599bdc, #3072b3);
    background: -ms-linear-gradient(top, #599bdc, #3072b3);
    background: -o-linear-gradient(top, #599bdc, #3072b3);
  }

  .gh-btn:active {
    -moz-box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
    background-image: none;
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .gh-ico {
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTMycHgiIGhlaWdodD0iNjZweCIgdmlld0JveD0iMCAwIDEzMiA2NiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTMyIDY2IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMzMzMzMzIiBkPSJNMzMsMS44Yy0xNy43LDAtMzIsMTQuMy0zMiwzMmMwLDE0LjEsOS4yLDI2LjEsMjEuOSwzMC40DQoJYzEuNiwwLjMsMi4yLTAuNywyLjItMS41YzAtMC44LDAtMi44LDAtNS40Yy04LjksMS45LTEwLjgtNC4zLTEwLjgtNC4zYy0xLjUtMy43LTMuNi00LjctMy42LTQuN2MtMi45LTIsMC4yLTEuOSwwLjItMS45DQoJYzMuMiwwLjIsNC45LDMuMyw0LjksMy4zYzIuOSw0LjksNy41LDMuNSw5LjMsMi43YzAuMy0yLjEsMS4xLTMuNSwyLTQuM2MtNy4xLTAuOC0xNC42LTMuNi0xNC42LTE1LjhjMC0zLjUsMS4yLTYuMywzLjMtOC42DQoJYy0wLjMtMC44LTEuNC00LjEsMC4zLTguNWMwLDAsMi43LTAuOSw4LjgsMy4zYzIuNi0wLjcsNS4zLTEuMSw4LTEuMWMyLjcsMCw1LjUsMC40LDgsMS4xYzYuMS00LjEsOC44LTMuMyw4LjgtMy4zDQoJYzEuNyw0LjQsMC42LDcuNywwLjMsOC41YzIuMSwyLjIsMy4zLDUuMSwzLjMsOC42YzAsMTIuMy03LjUsMTUtMTQuNiwxNS44YzEuMSwxLDIuMiwyLjksMi4yLDUuOWMwLDQuMywwLDcuNywwLDguOA0KCWMwLDAuOSwwLjYsMS45LDIuMiwxLjVDNTUuOCw1OS45LDY1LDQ3LjksNjUsMzMuOEM2NSwxNi4xLDUwLjcsMS44LDMzLDEuOHoiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjRkZGRkZGIiBkPSJNOTksMS44Yy0xNy43LDAtMzIsMTQuMy0zMiwzMmMwLDE0LjEsOS4yLDI2LjEsMjEuOSwzMC40DQoJYzEuNiwwLjMsMi4yLTAuNywyLjItMS41YzAtMC44LDAtMi44LDAtNS40Yy04LjksMS45LTEwLjgtNC4zLTEwLjgtNC4zYy0xLjUtMy43LTMuNi00LjctMy42LTQuN2MtMi45LTIsMC4yLTEuOSwwLjItMS45DQoJYzMuMiwwLjIsNC45LDMuMyw0LjksMy4zYzIuOSw0LjksNy41LDMuNSw5LjMsMi43YzAuMy0yLjEsMS4xLTMuNSwyLTQuM2MtNy4xLTAuOC0xNC42LTMuNi0xNC42LTE1LjhjMC0zLjUsMS4yLTYuMywzLjMtOC42DQoJYy0wLjMtMC44LTEuNC00LjEsMC4zLTguNWMwLDAsMi43LTAuOSw4LjgsMy4zYzIuNi0wLjcsNS4zLTEuMSw4LTEuMWMyLjcsMCw1LjUsMC40LDgsMS4xYzYuMS00LjEsOC44LTMuMyw4LjgtMy4zDQoJYzEuNyw0LjQsMC42LDcuNywwLjMsOC41YzIuMSwyLjIsMy4zLDUuMSwzLjMsOC42YzAsMTIuMy03LjUsMTUtMTQuNiwxNS44YzEuMSwxLDIuMiwyLjksMi4yLDUuOWMwLDQuMywwLDcuNywwLDguOA0KCWMwLDAuOSwwLjYsMS45LDIuMiwxLjVjMTIuNy00LjIsMjEuOS0xNi4yLDIxLjktMzAuNEMxMzEsMTYuMSwxMTYuNywxLjgsOTksMS44eiIvPg0KPC9zdmc+DQo=);
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 56px 28px;
    height: 28px;
    margin: 2px 6px 0 0;
    width: 28px;
  }

  .gh-btn:hover .gh-ico,
  .gh-btn:focus .gh-ico,
  .gh-btn:active .gh-ico {
    background-position: -28px 0;
  }

  .gh-count {
    background-color: #fafafa;
    display: block !important;
    display: none;
    z-index: 2;
  }

  .gh-count:hover,
  .gh-count:focus {
    color: #4183c4;
  }

  .gh-triangle {
    position: relative;
    margin-left: 11px;
    margin-right: -1px;
  }

  .gh-triangle:before,
  .gh-triangle:after {
    border-color: transparent;
    border-style: solid;
    content: '';
    position: absolute;
  }

  .gh-triangle:before {
    border-right-color: #fafafa;
    border-width: 8px 8px 8px 0;
    left: -7px;
    margin-top: -8px;
    top: 50%;
    z-index: 3;
  }

  .gh-triangle:after {
    border-right-color: #bababa;
    border-width: 9px 9px 9px 0;
    left: -8px;
    margin-top: -9px;
    top: 50%;
    z-index: 1;
  }

  ${media.mobile`
    .gh-btn,
    .gh-count {
      font-size: 16px;
      line-height: 21px;
      padding: 4px 12px 4px 10px;
    }

    .gh-ico {
      background-size: 36px 18px;
      height: 18px;
      margin: 1px 4px 0 0;
      width: 18px;
    }

    .gh-btn:hover .gh-ico,
    .gh-btn:focus .gh-ico,
    .gh-btn:active .gh-ico {
      background-position: -18px 0;
    }
  `};
`;

interface GithubBadgeState {
  numStars: number;
}

class GithubBadge extends React.Component<any, GithubBadgeState> {
  constructor(props) {
    super(props);
    this.state = {
      numStars: 2322, // start with a number close to the current star rating
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/nameko/nameko')
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          numStars: json.stargazers_count,
        });
      });
  }

  render() {
    const { numStars } = this.state;

    return (
      <Flex justifyContent="center" alignItems="center">
        <div className={githubButtonStyles}>
          <span className="github-btn">
            <a
              className="gh-btn"
              id="gh-btn"
              href="https://github.com/nameko/nameko"
            >
              <span className="gh-ico" />
              <span className="gh-text">Star</span>
            </a>
            <span className="gh-triangle" />
            <a
              className="gh-count"
              href="https://github.com/nameko/nameko/stargazers"
            >
              {numStars}
            </a>
          </span>
        </div>
      </Flex>
    );
  }
}

const containerStyles = css`
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: ${colors.wildSand};
`;

export function Badges() {
  return (
    <div className={containerStyles}>
      <GithubBadge />
    </div>
  );
}
