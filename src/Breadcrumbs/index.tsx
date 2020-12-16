import React, { FC, Fragment } from 'react'
import styled from '@emotion/styled'

type Breadcrumb = {
  title: string
  href: string
  as?: string
}

interface iProps {
  breadcrumbs: Breadcrumb[]
  Link?: any
}

const StyledBreadcrumbs = styled.div`
  margin-right: 25px;

  ul {
    display: flex;
    flex-direction: row;
    padding: 0px;
    margin: 0px;
    list-style: none;
    color: #666;

    li {
      margin: 5px;

      &:last-child {
        a {
          color: #1565c0;
          font-weight: 600;
        }
      }

      a {
        color: #666;
        font-weight: 400;
        line-height: 1.5;
        font-size: 14px;
        text-decoration: none;

        &:hover {
          color: #1565c0;
        }
      }
    }
  }
`

const Breadcrumbs: FC<iProps> = ({ breadcrumbs, Link }) => {
  const NextLink = Link || styled.a``

  return (
    <StyledBreadcrumbs>
      <ul>
        {breadcrumbs.map((breadcrumb: Breadcrumb, i: number) => (
          <Fragment key={`breadcrump-${i}`}>
            <li>
              <NextLink href={breadcrumb.href} as={breadcrumb.as || undefined}>
                {breadcrumb.title}
              </NextLink>
            </li>
            {i < breadcrumbs.length - 1 && (
              <li>
                <span>/</span>
              </li>
            )}
          </Fragment>
        ))}
      </ul>
    </StyledBreadcrumbs>
  )
}

export default Breadcrumbs
