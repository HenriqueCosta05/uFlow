import {
    BoxComponent,
    TooltipButtonComponent,
    TooltipComponent,
    TooltipTriggerComponent,
    TypographyComponent,
} from 'lora-ds'
import { Trans, useTranslation } from 'react-i18next'
import DropboxIcon from '../../../assets/logos/dropbox.svg?react'
import GoogleCalendarIcon from '../../../assets/logos/google_calendar.svg?react'
import GoogleDriveIcon from '../../../assets/logos/google_drive.svg?react'
import JiraIcon from '../../../assets/logos/jira.svg?react'
import NotionIcon from '../../../assets/logos/notion.svg?react'
import SlackIcon from '../../../assets/logos/slack.svg?react'
import MicrosoftTeamsIcon from '../../../assets/logos/teams.svg?react'
import FloatingIcon from '../FloatingIcon/FloatingIcon'
import IntegrationStyles from './Integrations.module.css'

const Integrations = () => {
    const { t } = useTranslation()

    const integrationsData = t('landing.integrations.list', {
        returnObjects: true,
    })

    const integrations =
        integrationsData && typeof integrationsData === 'object'
            ? (Object.values(integrationsData) as Array<{
                  name: string
                  tooltipText: string
              }>)
            : []

    const integrationIcons: { [key: string]: React.ReactNode } = {
        Notion: <NotionIcon />,
        Slack: <SlackIcon />,
        GoogleDrive: <GoogleDriveIcon />,
        MicrosoftTeams: <MicrosoftTeamsIcon />,
        Dropbox: <DropboxIcon />,
        Jira: <JiraIcon />,
        GoogleCalendar: <GoogleCalendarIcon />,
    }

    return (
        <BoxComponent className={IntegrationStyles.Integrations__Wrapper}>
            <TypographyComponent
                variant="h2"
                className={IntegrationStyles.Integrations__Title}
            >
                {t('landing.integrations.title')}
            </TypographyComponent>
            <TypographyComponent
                variant="body1"
                className={IntegrationStyles.Integrations__Description}
            >
                {t('landing.integrations.description')}
            </TypographyComponent>
            <BoxComponent className={IntegrationStyles.Integrations__List}>
                {integrations.map((integration, index) => {
                    const iconKey = integration.name.replaceAll(/\s+/g, '')
                    return (
                        <BoxComponent
                            key={index}
                            className={IntegrationStyles.Integrations__Card}
                        >
                            <TooltipTriggerComponent
                                delay={200}
                                closeDelay={100}
                            >
                                <TooltipButtonComponent>
                                    <FloatingIcon
                                        icon={integrationIcons[iconKey]}
                                        size="80px"
                                        variant="primary"
                                        animationDelay={
                                            ((index % 5) + 1) as
                                                | 1
                                                | 2
                                                | 3
                                                | 4
                                                | 5
                                        }
                                    />
                                </TooltipButtonComponent>
                                <TooltipComponent
                                    placement="top"
                                    showArrow
                                    offset={10}
                                >
                                    <BoxComponent
                                        className={
                                            IntegrationStyles.Integrations__TooltipContent
                                        }
                                    >
                                        <TypographyComponent variant="h4">
                                            {integration.name}
                                        </TypographyComponent>
                                        <TypographyComponent variant="body1">
                                            <Trans
                                                i18nKey={`landing.integrations.list.${index}.tooltipText`}
                                                components={{
                                                    LinkComponent: (
                                                        <a
                                                            href=""
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={
                                                                IntegrationStyles.Integrations__TooltipLink
                                                            }
                                                        />
                                                    ),
                                                }}
                                            />
                                        </TypographyComponent>
                                    </BoxComponent>
                                </TooltipComponent>
                            </TooltipTriggerComponent>
                        </BoxComponent>
                    )
                })}
            </BoxComponent>
        </BoxComponent>
    )
}

export default Integrations
